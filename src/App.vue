<template>
    <div id="app">
        <Registration></Registration>
    </div>
</template>

<script>
    import Registration from "./components/Registration"

    export default {
        name: 'App',
        components: {
            Registration
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #444444;
        margin-top: 60px;
    }

    *,
    *:before,
    *:after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 16px;
    }
    html{
        box-sizing: inherit;
    }

    body {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
        background: linear-gradient(16deg, #1EBF7E, #52DFA6);
        background-repeat: no-repeat;
        background-attachment: fixed;
        font-size: 1rem;
    }

    img {
        max-width: 100%;
    }

    a {
        text-decoration: none;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

</style>
