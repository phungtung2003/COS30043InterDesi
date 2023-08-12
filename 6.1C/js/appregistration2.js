new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    methods: {
      validate() {
          this.$refs.myForm.validate()
          },
      toggle() {
          this.showValues = !this.showValues
          }
    },
data: () => ({
    valid: true, firstName: '', lastName :'', userName: '', password :'', confirmpassword:'',  email: '', phonenum : '', streetaddr: '', suburb: '', postcode: '',
    showValues : false,
    show1 : false,
    show2 : false,
    nameRules: [
        v => !!v || 'Name required',
        v => (v && v.length <= 10) || 'Name is too long, try less than 10 characters',
        v => /^[A-Za-z ]+$/.test(v) || 'Name cannot contain numbers or special symbols' 
        ],

    usrnameRules: [
        v => !!v || 'Username required',
        v => (v && v.length >= 3) || 'User name is too short, try more than 3 characters',
    ],

    passwordRules: [
        v => !!v ||  'Password required',
        v => (v && v.length >= 8) || 'Password is too short, try more than 8 characters',
        v => (v && v.split('').find(e => e.match(/^[$%^&*]+$/)) != undefined) || 'Password needs at least 1 special character ($, %, ^, &, or *)'
    ],
  
    emailRules: [
        v => !!v || 'E-mail required',
        v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || 'E-mail needs to be valid',
    ],

    phoneRules: [
        v => !!v || 'Mobile number required',
        v => (v && /^[0-9]+$/.test(v)) || 'Mobile number must be numbers',
        v => (v && v.length === 10) || 'Mobile number must be 10 characters',
        v => (v && v.split('').splice(0, 2).join('') === '04') || 'Mobile number needs to start with 04',
    ],

    postcodeRules: [
        v => !!v || 'Postcode required',
        v => (v && /^[0-9]+$/.test(v)) || 'Postcode must be numbers',
        v => (v && v.length === 4) || 'Postcode must be 4 characters',
    ]
    })
})

  