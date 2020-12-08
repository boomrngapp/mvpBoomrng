import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";


let formState = "signUp";
let formInputState = {
  username: "",
  password: "",
  email: "",
  verificationCode: "",
};

function onChange(e) {
  formInputState = { ...formInputState, [e.target.name]: e.target.value };
}

async function signUp() {
  try {
    await Auth.signUp({
      username: formInputState.username,
      password: formInputState.password,
      attributes: {
        email: formInputState.email,
      },
    });
    formState = "confirmSignUp";
  } catch (err) {
    console.log({ err });
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(
        formInputState.username,
        formInputState.verificationCode
      );
      formState = "signIn";
    } catch (err) {
      console.log({ err });
    }

    async function signIn() {
      try {
        await Auth.signIn(formInputState.username, formInputState.password);
        formState = "signedIn";
      } catch (err) {
        console.log({ err });
      }
    }

    // Update this section with front-end screen designs
    // BEGIN 1
    if (formState === "signUp") {
      return (
        <div>
          <input name="username" onChange={onChange} />
          <input name="password" type="password" onChange={onChange} />
          <input name="email" onChange={onChange} />
          <button onClick={signUp}>Sign Up</button>
        </div>
      );
    }

    if (formState === "confirmSignUp") {
      return (
        <div>
          <input name="username" onChange={onChange} />
          <input name="verificationCode" onChange={onChange} />
          <button onClick={confirmSignUp}>Confirm Sign Up</button>
        </div>
      );
    }

    if (formState === "signIn") {
      return (
        <div>
          <input name="username" onChange={onChange} />
          <input name="password" onChange={onChange} />
          <button onClick={signIn}>Sign In</button>
        </div>
      );
    }

    if (formState === "signedIn") {
      return (
        <div>
          <h1>Welcome to Boomrng!</h1>
        </div>
      );
    }
    // END 1
  }
}
