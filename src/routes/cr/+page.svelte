<script lang="ts">
    let name = $state("")
    let email = $state("")

    async function handleSubmit(e: Event) {
        e.preventDefault()
        try {
            const response = await fetch('/api/user', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email
                })
            })
            const user = await response.json()
            console.log(user)
        } catch(error) {
            console.log(error)
        }
    }
</script>

<div>
    <form onsubmit={handleSubmit}>
        <div>
            <label for=name>Name</label>
            <input name=name type=text bind:value={name} />
        </div>
        <div>
            <label for=email>Email</label>
            <input name=email type=email bind:value={email} />
        </div>
        <button type="submit">Submit</button>
    </form>
</div>