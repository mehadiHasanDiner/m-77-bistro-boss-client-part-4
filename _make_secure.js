/**
 * -------------------------
 *      BASIC
 * -------------------------
 * 1. do not show the link to them who should not see it
 * only show the person/types of user who should see it
 * 2. do not allow to visit the link by typing on the url
 * use AdminRoute that will check whether the user is admin or not.
 * if not admin then redirect to any other page. you could logout user and send them to the login page as well.
 * 
 * ---------------------------
 *      TO SEND DATA
 * ---------------------------
 * 1. verify jwt token (send authentication token in the header to the server).
 * If possible, use axios to send jwt token by intercepting the request.
 * 2. if it is an admin activity. make sure only admin user is posting data by using verify admin.
 *
 *
 * */
