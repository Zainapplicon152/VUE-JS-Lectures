<template>
    <div>
        <h1>Route 1</h1>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item to="/">Route 1</b-nav-item>

                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Sub Routes" right>
                    <b-dropdown-item to="sub_routes/1">Sub route 1</b-dropdown-item>
                    <b-dropdown-item to="sub_routes/2">Sub route 2</b-dropdown-item>
                    <b-dropdown-item to="sub_routes/3">Sub route 3</b-dropdown-item>
                    <b-dropdown-item to="sub_routes/4">Sub route 4</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "route1"
    }
</script>

<style scoped>

</style>