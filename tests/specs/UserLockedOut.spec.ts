import { assert } from 'chai';
import LoginPage from "../pages/login.page";
import {ExpectedAssertions} from "../testdata/ExpectedAssertions";

describe('Login with locked user credentials', () => {

    let login: LoginPage;

    before( () => {
        login = new LoginPage();
    });

    it('should display user locked out error', async () => {
        await login.loginWithLockedOutUser();
        assert.equal(
            await login.getUserLockedOutMessage(),
            ExpectedAssertions.lockedUser.errorMessage,
            'User locked out error message assertion failed',
        );
    })

});