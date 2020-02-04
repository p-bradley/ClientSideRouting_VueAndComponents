export default {
    template: `
    <section>
        <h1> {{ message }} </h1>
    
    <form id="my-form">
        <label for="name">Enter your name:</label>
        <input v-model="user" type="text" name="username" required placeholder="username">

        <label for ="password">Enter your password:</label>
        <input v-model="password" type="password" name="password" required placeholder="password">

        <input @click.prevent="SubmitUserData" type="submit" value="sign up / log in">
        </form>
        </section>
        `,

    data: function() {
        return {
            user: "",
            password: ""
        }
    },

    methods: {
        SubmitUserData() {
            //do a fetch here using the POST Method
            //refer to the node mailer example from last semester as to
            //how to get data from a form into a fetch call using POST
            console.log('hit the API pan is asking for, which should be in the root Vue instance');

            document.querySelector('form').reset();
            
            //reset the username and password data in our app
            this.user = "";
            this.password = "";
        }
    },

    created: function() {
        console.log('our app component rendered');
    
    }
}