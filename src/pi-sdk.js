window.Pi.init({ version: "2.0" });

export function loginWithPi(callback) {
  window.Pi.authenticate(['username'], function(auth) {
    console.log("User Pi:", auth.user);
    callback(auth.user);
  });
}
