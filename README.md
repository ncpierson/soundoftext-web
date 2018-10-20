Sound of Text
---

This is the official repository for https://soundoftext.com.

This is the statically-deployed front-end, written in React.
This codebase uses
[Create React App](https://github.com/facebook/create-react-app).

Looking for the API? [Look here](https://github.com/ncpierson/soundoftext-api).

Looking for the language codes?
[Look here](https://github.com/ncpierson/google-tts-languages).

# Deployment

To deploy from your local machine, simply run:

```
./scripts/deploy.sh
```

If you have ssh access to the official website, this will work for you.
Otherwise, modify the script to deploy to your personal environment.
Please don't try to steal my branding :|

# Development

Using Prettier is enforced in this repository. If your commit fails, simply run `yarn prettier` to auto-format all files in-place.

To configure this website to your personal setup, look at `src/config.js`.
