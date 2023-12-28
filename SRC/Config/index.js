// export const baseUrl = "https://hatch-social.ad-wize.com";
export const baseUrl = "https://2eda-103-125-71-34.ngrok-free.app";
// export const baseUrl = "https://37bb-103-125-71-34.ngrok-free.app";
export const imageUrl = `${baseUrl}/api/images/`;
export const profilePicUrl = `${baseUrl}/uploads`

export const apiDataLimit = 10;
export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
