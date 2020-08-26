<template>
    <div>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Enter ur name" v-model="signup.name"/>
        <br/>
        <br/>
        <input type="password" placeholder="Enter password" v-model="signup.password"/>
        <br/>
        <br/>
        <input type="checkbox" value="cricket" id="cricket" v-model="signup.hobbies"/>
        <label for="cricket">Cricket</label>
        <input type="checkbox" value="football" id="football" v-model="signup.hobbies"/>
        <label for="football">Football</label>
        <br/>
        <br/>
        <input type="radio" id="male" value="male" v-model="signup.gender"/>
        <label for="male">Male</label>

        <input type="radio" id="female" value="female" v-model="signup.gender"/>
        <label for="female">Female</label>
        <br/>
        <br/>
        <button v-on:click="signUpUser">SignUp</button>
    </div>
</template>

<script>
    export default {
        name: "SignUp",
        data() {
            return {
                signup: {
                    name: null,
                    password: null,
                    hobbies: [],
                    gender: null,
                },
            };
        },
        methods: {
            signUpUser() {
                console.warn(this.signup);
            },
        },
    };
</script>