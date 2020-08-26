<template>
    <div class="apicall">
        <h1>Api call with Vue js</h1>
        <ul v-if="posts && posts.length">
            <li v-for="post of posts" v-bind:key='post'>
                <p><strong>{{post.title}}</strong></p>
                <p>{{post.body | ucase}}</p>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors" v-bind:key="error">
                {{error.message}}
            </li>
        </ul>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: 'ApiCall',
        data() {
            return {
                posts: [],
                errors: []
            }
        },

        // Fetches posts when the component is created.
        created() {
            axios.get(`http://jsonplaceholder.typicode.com/posts`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.posts = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })

            // async / await version (created() becomes async created())
            //
            // try {
            //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
            //   this.posts = response.data
            // } catch (e) {
            //   this.errors.push(e)
            // }
        }
    }
</script>
<style scoped>
    .apicall {
        background-color: antiquewhite;
    }
</style>