<script lang="ts">
    let { data } = $props()
    console.log(data.users[0].name)
</script>

<div>
    <h1>Svelte Drizzle</h1>
    {#each data.users as user}
    <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>ID: {user.id}</p>
    </div>
    {/each}
</div>