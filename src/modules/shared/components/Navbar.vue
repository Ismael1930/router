<template>
    <div>
        <RouterLink to="/">Pokemon List</RouterLink>
        <RouterLink to="/id">Pokemon por id</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </div>
</template>

<style scoped>
div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin:  0 10px;
}

div .router-link-exact-active {
    color: #42b983;
}
</style>