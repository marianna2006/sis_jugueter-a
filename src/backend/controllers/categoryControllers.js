import { categoryServices } from "../services/categoryServices.js";

export const categoryControllers = {
    async createCategory(req, res){
        try{
            const { name } = req.body;

            //Validación
            if(!name){
                return res.status(400).json({
                    success: false,
                    message: 'Nombre de categoría obligatorio'
                });
            }

            const newCategory = await categoryServices.createCategory({name});
            res.status(200).json({
                success: true,
                data: newCategory,
                message: 'Categoría creado exitosamente'
            });
        }catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    async getCategory(req, res){
        try{
            const categories = await categoryServices.getAllCategories();
            res.status(200).json({
                success: true,
                data: categories 
            });
        }catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    async apdateCatgeory(req, res){
        try{
            const { id } = req.params;
            const updateData = req.body;

            const updateCategory = await categoryServices.updateCategory(id, updateData);
            res.status(200).json({
                succes: true,
                data: updateCategory,
                message: 'Categoría actualizado correctament'
            });
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            });
        }
    },

    async deleteCategory(req, res){
        try{
            const {id} = req.params;
            await userServices.deleteUser(id);
            res.status(200).json({
                succes: true,
                message: 'Categoría eliminado correctamen👌.'
            });
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            });
        }
    }
}