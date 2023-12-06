<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    //export let form;
    //export let data: PageData;
</script>


<h1>Logga in</h1>

<form method="post" action="?/login" use:enhance>
    <label for="username">Användarnamn:</label>
    <input id="username" type="text" name="UserName">
    <label for="pass">Lösenord:</label>
    <input id="pass" type="password" name="Password">
    <button>Logga in</button>
</form>

<h1>Om du inte har en användare: Registrera</h1>

<form method="post" action="?/reg" use:enhance>
    <button>Skapa användare</button>
</form>