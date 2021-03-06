module.exports = (app) => {
	const register = require('../controllers/register.controllers')
	const passport = require('passport');

  app.get('/', register.greeting);

	app.get('/register/detail', register.getDetail);

  app.post('/register/result',passport.authenticate('bearer', { session: false }),register.getRegisterResult);

	app.route('/register/process')
		.post(register.processRequest)
		.delete(register.deleteRegister);

	app.post('/register/add',passport.authenticate('bearer', { session: false }),register.add);
	app.delete('/register/remove',passport.authenticate('bearer', { session: false }),register.remove);
	app.post('/register/withdraw', passport.authenticate('bearer', { session: false }), register.withdraw);
	app.post('/register/fee', passport.authenticate('bearer', { session: false }), register.payFee);
	app.get('/register/fee', passport.authenticate('bearer', { session: false }), register.feeStatus);

}
