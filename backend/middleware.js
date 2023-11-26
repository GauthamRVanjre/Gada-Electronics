function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    return next();
  }
  res.redirect("/"); // Redirect to home or non-admin page
}
