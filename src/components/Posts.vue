<template>
    <div>
        <h1>Post API</h1>
        <form action="post" @submit="submit">
            <input type="text" placeholder="user id" v-model="posts.user_id"/> <br><br>
            <input type="text" placeholder="title" v-model="posts.title"/> <br><br>
            <input type="text" placeholder="description" v-model="posts.description"><br><br>
            <input type="text" placeholder="address" v-model="posts.address"><br><br>
            <button type="submit">Post</button>
        </form>

    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    -
        Vue.use(VueAxios, axios)
    export default {
        name: "Posts",
        data() {
            return {
                posts: {
                    user_id: '',
                    school_id: 1,
                    title: '',
                    description: '',
                    Status: 'active',
                    address: '',
                    longitude: 1,
                    latitude: 1
                }
            }
        },
        methods: {
            submit(e) {
                this.axios.post('http://54.205.241.204/api/post', this.posts).then(resp => {
                    console.warn(resp)
                })
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>

</style>