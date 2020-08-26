<template>
    <div>
        <input type="text" v-model="postBody" @change="postPost()"/>
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
        name: 'ApiCall2',
        data() {

            return {
                postBody: '',
                errors: []
            }
        },

        // Pushes posts to the server when called.
        postPost() {
            axios.post(`http://jsonplaceholder.typicode.com/posts`, {
                body: this.postBody
            })
                .then(response => {
                    console.warn(response)
                })
                .catch(e => {
                    this.errors.push(e)
                })

            // async / await version (postPost() becomes async postPost())
            //
            // try {
            //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
            //     body: this.postBody
            //   })
            // } catch (e) {
            //   this.errors.push(e)
            // }
        }
    }
</script>