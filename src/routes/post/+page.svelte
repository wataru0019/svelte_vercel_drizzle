<script lang="ts">
    let { data } = $props()
    let userId = data.user.id
    let title = $state("")
    let content = $state("")

    async function handleSubmit(e: Event) {
        e.preventDefault()
        const response = await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: content,
                userId: userId
            })
        })
        const user = await response.json()
        console.log(user)
    }
</script>

<div>
    <form onsubmit={handleSubmit}>
        <div>
            <label for="title">Title</label>
            <input type="text" name="title" placeholder="title" bind:value={title} />
        </div>
        <div>
            <label for="content">Content</label>
            <input type="text" name="content" placeholder="content" bind:value={content} />
        </div>
        <button type="submit">Submit</button>
    </form>
    <div>
        <ul>
            {#each data.posts as post}
                <li>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                </li>
            {/each}
        </ul>
    </div>
</div>