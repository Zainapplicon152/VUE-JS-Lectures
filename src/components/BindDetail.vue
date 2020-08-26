<template>
    <div id="visa">
        <h1>Vue Visa Application</h1>
        <form>
            <label for="first name">First Name:</label>
            <input type="text" v-model="fName" required/>
            <br/>
            <label for="last name">Last Name:</label>
            <input type="text" v-model="lName" required/>
            <br/>
            <label for="country">Nationality:</label>
            <input type="text" v-model="country" required/>
            <br/>
            <label for="passport number">Passport Number:</label>
            <input type="text" v-model.lazy="pNumber" required/>

            <label for="duration">Duration of stay:</label>
            <input type="text" v-model="duration" required/>

            <h2>Preview Application Details</h2>
            <p>First Name: {{fName}}</p>
            <p>Last Name: {{lName}}</p>
            <p>Nationality: {{country}}</p>
            <p>Passport Number: {{pNumber}}</p>
            <p>Duration: {{duration}}</p>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Test",
        props: {
            msg: String,
        },
        data() {
            return {
                fName: "",
                lName: "",
                country: "",
                pNumber: "",
                duration: "",
            };
        },
    };
</script>

<style scoped>
    #visa {
        margin: 20px auto;
        max-width: 700px;
    }

    label {
        display: block;
        margin: 20px 0 10px;
    }

    input {
        font-size: 30px;
        border: 1px double rgb(102, 97, 96);
        border-radius: 4px;
    }
</style>