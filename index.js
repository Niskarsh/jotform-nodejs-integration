const Jotform = require('jotform').default;
const JOTFORM_API_KEY = "6db6abd9db4736cf812afca0906d23cc";

async function testFn() {
  const client = new Jotform(JOTFORM_API_KEY);
  let formParameters = {
    questions: [
      {
        type: 'control_head',
        text: 'Course Lead',
        order: '1',
        subHeader: 'SOAL',
        headerType: 'Large'
        // name: 'coursename',
      },
      {
        // labelAlign: 'top',
      type: 'control_fullname',
      text: 'Name',
      order: '2',
      name: 'name',
    },
    {
    type: 'control_email',
    text: 'Email',
    order: '3',
  },
  {
    type: 'control_address',
    text: 'Address',
    order: '4',
  },
  // {
  //   type: 'control_textbox',
  //   text: 'Phone',
  //   defaultValue: '+91',
  //   size: '13',
  //   order: '5',
  // },
  {
    type: 'control_textarea',
    text: 'Phone',
    maxsize: '13',
    rows: '1',
    entryLimit: 'Letters-13',
    defaultValue: '+91',
    // cols: '13',
    order: '5',
  },
  {
    type: 'control_textarea',
    text: 'Bio',
    order: '6',
  },
  {
    type: 'control_radio',
    text: 'Gender',
    options: 'Male | Female | Other',
    checked: 'Yes',
    selected: 'Male',
    order: '7',
  },
  {
    type: 'control_birthdate',
    text: 'Date of Birth',
    format: 'ddmmyyyy',
    order: '8',
  },
     {
      type: 'control_button',
      // buttonAlign: 'center',
      buttonStyle: 'simple_green_apple',
      text: 'Submit',
      order: '9',
      clear: 'Yes',
     },
  ],
    properties: {
      title: 'Test',
      styles: 'desk',
      injectCSS: `.form-all {
          background-color: snow;
          box-shadow: 5px 5px 5px oldlace;
          border-radius: 5px;
        }   
        @media (min-width: 750px) {
          .form-all {
                width : 60%;
            }
        }`,
    },
  };
  let response = await client.form.createForm(formParameters);
  await client.form.createWebhook(response.content.id, 'https://www.myhost.com/post.php');
  console.log(response);
  // const questions = await client.form.addQuestions(response.content.id, [
  //     {
  //       type: 'control_email',
  //       name: 'emailfield',
  //       text: 'My email field',
  //       order: '1'
  //     }, {
  //       type: 'control_email',
  //       name: 'emailfield2',
  //       text: 'My email field 2',
  //       order: '2'
  //     }
  //   ]);
}

testFn();