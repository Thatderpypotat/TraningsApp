<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    //export let data: PageData;
</script>

<h1>Här kan du registrera:</h1>

<form method="post" action="?/create" use:enhance>
    <label for="namn">Ditt användarnamn</label>
    <input id="namn" type="text" name="new_user">
    <label for="passW">Ditt lösenord</label>
    <input id="passW" type="text" name="new_pass">
    <button>Skapa användare</button>
</form>