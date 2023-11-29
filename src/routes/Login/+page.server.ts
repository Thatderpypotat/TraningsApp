import { sveltekit } from '@sveltejs/kit/vite';
import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    login: async ({request, cookies}) => {
        let data = await request.formData();
        let form_username = data.get("UserName")?.toString();
        let form_password = data.get("PassWord")?.toString();
        


    },
    reg: async ({cookies}) => {
        let username = cookies.get("username");
        if(!username){
            throw redirect(303, "/registrera")
        }
    }
        
};