import { userServices } from "../services/userServices.js";


//Endpoint para btener usuarios
export const userControllers = {
    async getUsers(req, res){
        try{
            const users = await userServices.getAllUsers();
            res.status(200).json({
                succes: true,
                data: users
            })
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            })
        }
    },


    //Endpoint para crear usuarios
    async createUser(req,res){
        try{
            const {email, name} = req.body;
            //Validación
            if(!email || !name){
                return res.status(400).json({
                    succes: false,
                    message: 'Email y nombre son obligatorio😁.'
                });
            }
            const newUser = await userServices.createUser({email, name});
            res.status(201).json({
                succes: true,
                data: newUser,

                message: 'Usuario creado exitosament👌.'
            });
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            })
        }
    },


    //Endpoint para actualizar usuarios
    async updateUser(req, res){
        try{
            const {id} = req.params;
            const updateData = req.body;

            const updateUser = await userServices.updateUser(id, updateData);

            res.status(200).json({
                succes: true,
                data: updateUser,
                message: 'Usuario actualizado correctament👌.'
            });
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            });
        }
    },


    //Endpoint para eliminar usuarios
    async deleteUser(req, res){
        try{
            const {id} = req.params;
            await userServices.deleteUser(id);
            res.status(200).json({
                succes: true,
                message: 'Usuario eliminado correctamen👌.'
            });
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            });
        }
    }
}