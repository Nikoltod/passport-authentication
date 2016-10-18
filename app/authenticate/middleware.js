//It only has one role if the user is authenticated (has the right cookies) it simply calls the next middleware; otherwise it redirects to the page where the user can log in
function authenticationMiddleware() {
    return function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        res.redirect('/');
    }
}