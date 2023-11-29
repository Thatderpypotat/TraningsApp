import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    ifLoggedIn:async ({cookies}) => {
        let username = cookies.get("username");
        if(!username){
            throw redirect(303, "/Login")
        }
    }
};