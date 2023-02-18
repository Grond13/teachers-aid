<template>
    <div class="formWrapper">
        <h2>Login</h2>
        <form action="">
            <label for="email" class="form-label">Email: </label>
            <input type="email" class="form-control" id="email">

            <label for="password" class="form-label">Password: </label>
            <input type="password" class="form-control" id="password">

            <div class="center">
                <input type="submit" value="Log in" class="btn btn-primary submitButton">
            </div>
        </form>
    </div>
</template>

<style scoped>
@import '../assets/forms.css';
</style>