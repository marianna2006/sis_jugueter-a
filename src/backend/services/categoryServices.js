import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export const categoryServices = {
    //Crear categoría
    async createCategory(data){
        try{
            const { name } = data;
            return await prisma.category.create({
                data: { name }
            });
        }catch(error){
            throw new Error ('Error al crear categoría ' + error.message);
        }
    },

    //Obtener categoría
    async getAllCategories(){
        try{
            return await prisma.category.findMany();
        }catch(error){
            throw new Error ('Error al obtener categoría ' + error.message);
        }
    },

    //Actualizar categoría
    async updateCategory(id, data){
        try{
            return await prisma.category.update({
                where: { id:parseInt(id) },
                data: data
            });
        }catch(error){
            throw new Error ('Error al actualizar categoría ' + error.message);
        }
    },

    //Eliminar categoría
    async deleteCategory(id){
        try{
            return await prisma.category.delete({
                where: { id:parseInt(id) }
            });
        }catch(error){
            throw new Error ('Error al actualizar categoría ' + error.message);
        }
    }
}