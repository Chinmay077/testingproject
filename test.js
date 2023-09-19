import { Selector, t } from 'testcafe';

fixture('Automate Login Tests')
    .page('https://dev.deepthought.education/login');

test('Successful Login', async (t) => {
    await t
        .typeText(Selector('#username'), 'chinmaydubey77') 
        .typeText(Selector('#password'), 'Chinmay@07') 
        .click(Selector('button').withText('Login'))
        .click(Selector('.btn'))
});

test('Unsuccessful Login', async (t) => {
    await t
        .typeText(Selector('#username'), 'chinmaydubey77') 
        .typeText(Selector('#password'), 'Chinmay@77')
        .click(Selector('button').withText('Login'))
        .click(Selector('.btn'))
        .expect(Selector('.login-error-notify').exists).ok();
});
