import { test, expect, chromium } from '@playwright/test';

const baseurl = 'http://bsit-ch-d005:9080/bank/portal#/login'
const loginUrl ='http://bsit-ch-d005:9080/bank/portal#/dashboard/global'
const prodUrl = 'http://bsit-ch-d005:9080/bank/portal#/ext-route?type=FG_TRD_REG_RQ&subType=FG_EDPMS_REG'

 test('Happy Flow1', async ({ page }) => {
await page.goto('http://bsit-ch-d005:9080/bank/portal#/login');
await expect(page).toHaveURL(baseurl)

//ENTERING CREDENTIALS FOR LOGIN:
await page.locator('#corporateid').click();
await page.locator('#corporateid').fill('BLUESCOPE');
await page.locator('#username').click();
await page.locator('#username').fill('CHECKER1');
await page.locator('#password').click();
await page.locator('#password').fill('password');
await page.getByText('Login').click();
await expect(page).toHaveURL(loginUrl)

//SELECTING EDPMS PRODUCT:
await page.getByRole('list').locator('a').filter({hasText:'Trade/ Forex'}).click();
await page.getByRole('list').locator('a').filter({hasText:'Exports Regularization'}).click();
await expect(page).toHaveURL(prodUrl)

//SELECTING INITIATE NEW REQUEST:
await page.frameLocator('iframe[title="widgetInIframe"]').locator('fg-single-action').getByRole('button', { name: 'Edit Record' }).click();

//SELECTING REQUEST TYPE:
await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Request type' }).locator('span').click();
await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'AD Transfer Request' }).click();

//ADDING NEW REQUEST:
await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Add' }).click();

//SELECTING EXPORT TYPE AS GOODS:
await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Export Type *' }).locator('div').nth(3).click();
await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'Goods' }).locator('span').first().click()

//SELECTING OPTIONS OF EXPORT AGENCY:
await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Export Agency *' }).locator('div').nth(3).click();
await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'CUSTOMS' }).locator('span').first().click();
//SELECTING STPI:
// await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'STPI' }).locator('span').first().click();
//SELECTING SEZ: 
// await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'SEZ' }).locator('span').first().click();
//ENTERING SHIPPING BILL NUMBER:
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Shipping Bill Number').click();
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Shipping Bill Number').fill('3459867');
 
 //FORM NUMBER: is disabled
  await expect( page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Form No')).toBeDisabled();

 //SELECTING SHIPPING BILL DATE:
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Open calendar' }).click();
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: '2 May 2023', exact: true }).click();

 //ENTERING PORT CODE:
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Port Code').click();
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Port Code').fill('elc3455');
 
 //ENTERING EXISTING AD CODE:
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Existing AD Code').click();
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Existing AD Code').fill('5678902');
 
 //ENTERING NEW AD CODE:
 await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('New AD Code *').click();
 await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('New AD Code *').fill('2345');

 //ADD BUTTON:
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Add' }).click();
 
 //NEXT BUTTON:
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Next' }).click();
 
 //ATTACHMENT IN AD TRANSFER REQUEST:
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Browse' }).click();
  const [uploadFiles] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Choose' }).click(),
  ]);
  uploadFiles.setFiles("tests/Kotak-EDPMS/Upload Files/adupload.xlsx");
  await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('Title *').click();
  await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('Title *').fill('Test');
  await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: ' Upload' }).click();
 
  //DOWNLOADING FILE:
 const download = await Promise.all([
    page.waitForEvent("download"),
    page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'download' }).click(),
])
 const fileName = download[0].suggestedFilename()
 await download [0].saveAs(fileName)

 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Next' }).click();
 await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Submit' }).click();

 //CONFORMATION MESSAGE
 await expect (page.frameLocator('iframe[title="widgetInIframe"]').getByRole('heading', { name: 'Confirmation' })).toHaveText('Confirmation')
 await page.frameLocator('iframe[title="widgetInIframe"]').getByText('Yes').click();
 await page.waitForTimeout(45000);
 await expect(page.frameLocator('iframe[title="widgetInIframe"]').getByText('Success', { exact: true })).toHaveText('Success')
 await expect (page.frameLocator('iframe[title="widgetInIframe"]').getByText('Your transaction is submitted successfully.')).toHaveText('Your transaction is submitted successfully.')
 
});


test('Happy flow 2', async ({ page }) => {
    await page.goto('http://bsit-ch-d005:9080/bank/portal#/login');
    await expect(page).toHaveURL(baseurl)
    
    //ENTERING CREDENTIALS FOR LOGIN:
    await page.locator('#corporateid').click();
    await page.locator('#corporateid').fill('BLUESCOPE');
    await page.locator('#username').click();
    await page.locator('#username').fill('CHECKER1');
    await page.locator('#password').click();
    await page.locator('#password').fill('password');
    await page.getByText('Login').click();
    await expect(page).toHaveURL(loginUrl)
    
    //SELECTING EDPMS PRODUCT:
    await page.getByRole('list').locator('a').filter({hasText:'Trade/ Forex'}).click();
    await page.getByRole('list').locator('a').filter({hasText:'Exports Regularization'}).click();
    await expect(page).toHaveURL(prodUrl)
    
    //SELECTING INITIATE NEW REQUEST:
    await page.frameLocator('iframe[title="widgetInIframe"]').locator('fg-single-action').getByRole('button', { name: 'Edit Record' }).click();
    
    //SELECTING REQUEST TYPE:
    await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Request type' }).locator('span').click();
    await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'AD Transfer Request' }).click();
    
    //ADDING NEW REQUEST:
    await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Add' }).click();
    
    //SELECTING EXPORT TYPE AS GOODS:
    await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Export Type *' }).locator('div').nth(3).click();
    await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'Software' }).locator('span').first().click();
    
    
    //SELECTING OPTIONS OF EXPORT AGENCY:
    await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Export Agency *' }).locator('div').nth(3).click();
    await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'CUSTOMS' }).locator('span').first().click();

    //ENTERING SHIPPING BILL NUMBER:is disabled
     await expect(page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Shipping Bill Number')).toBeDisabled;
     
     //ENTERING FORM NUMBER
      await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Form No').click();
      await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Form No').fill('34598674');
    
     // SELECTING SHIPPING BILL DATE:
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Open calendar' }).click();
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: '2 May 2023', exact: true }).click();
    
     //ENTERING PORT CODE:
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Port Code').click();
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Port Code').fill('elc3455');
     
     //ENTERING EXISTING AD CODE:
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Existing AD Code').click();
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Existing AD Code').fill('5678902');
    
     //ENTERING NEW AD CODE:
     await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('New AD Code *').click();
     await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('New AD Code *').fill('2345');
     
     //ADD BUTTON:
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Add' }).click();
    
     //NEXT BUTTON:
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Next' }).click();
     
     //ATTACHMENT IN AD TRANSFER REQUEST:
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Browse' }).click();
      const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Choose' }).click(),
      ]);
      uploadFiles.setFiles("tests/Kotak-EDPMS/Upload Files/adupload.xlsx");
      await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('Title *').click();
      await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('Title *').fill('Test');
      await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: ' Upload' }).click();
     
      //DOWNLOADING FILE:
     const download = await Promise.all([
        page.waitForEvent("download"),
        page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'download' }).click(),
    ])
     const fileName = download[0].suggestedFilename()
     await download [0].saveAs(fileName)
    
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Next' }).click();
     await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Submit' }).click();
      
     //CONFIRMATION MESSAGE
      
   await expect (page.frameLocator('iframe[title="widgetInIframe"]').getByRole('heading', { name: 'Confirmation' })).toHaveText('Confirmation')
   await page.frameLocator('iframe[title="widgetInIframe"]').getByText('Yes').click();
   await page.waitForTimeout(45000);
   await expect(page.frameLocator('iframe[title="widgetInIframe"]').getByText('Success', { exact: true })).toHaveText('Success')
   await expect (page.frameLocator('iframe[title="widgetInIframe"]').getByText('Your transaction is submitted successfully.')).toHaveText('Your transaction is submitted successfully.')       
    });


    test('Happy Flow 3', async ({ page }) => {
      await page.goto('http://bsit-ch-d005:9080/bank/portal#/login');
      await expect(page).toHaveURL(baseurl)
      
      //ENTERING CREDENTIALS FOR LOGIN:
      await page.locator('#corporateid').click();
      await page.locator('#corporateid').fill('BLUESCOPE');
      await page.locator('#username').click();
      await page.locator('#username').fill('CHECKER1');
      await page.locator('#password').click();
      await page.locator('#password').fill('password');
      await page.getByText('Login').click();
      await expect(page).toHaveURL(loginUrl)
      
      //SELECTING EDPMS PRODUCT:
      await page.getByRole('list').locator('a').filter({hasText:'Trade/ Forex'}).click();
      await page.getByRole('list').locator('a').filter({hasText:'Exports Regularization'}).click();
      await expect(page).toHaveURL(prodUrl)
      
      //SELECTING INITIATE NEW REQUEST:
      await page.frameLocator('iframe[title="widgetInIframe"]').locator('fg-single-action').getByRole('button', { name: 'Edit Record' }).click();
      
      //SELECTING REQUEST TYPE:
      await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Request type' }).locator('span').click();
      await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'AD Transfer Request' }).click();
      
      //ADDING NEW REQUEST:
      await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Add' }).click();
      
      //SELECTING EXPORT TYPE AS GOODS:
      await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Export Type *' }).locator('div').nth(3).click();
      await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'Goods' }).locator('span').first().click()
      
      //SELECTING OPTIONS OF EXPORT AGENCY:
      await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Export Agency *' }).locator('div').nth(3).click();
      
      //SELECTING STPI:
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'STPI' }).locator('span').first().click();

       //ENTERING SHIPPING BILL NUMBER:
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Shipping Bill Number').click();
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Shipping Bill Number').fill('3459867');
       
       //FORM NUMBER: is disabled
        await expect( page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Form No')).toBeDisabled();
      
       //SELECTING SHIPPING BILL DATE:
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Open calendar' }).click();
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: '2 May 2023', exact: true }).click();
       
       //ENTERING PORT CODE:
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Port Code').click();
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Port Code').fill('elc3455');
       
       //ENTERING EXISTING AD CODE:
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Existing AD Code').click();
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Existing AD Code').fill('5678902');
       
       //ENTERING NEW AD CODE:
       await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('New AD Code *').click();
       await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('New AD Code *').fill('2345');
       
       //ADD BUTTON:
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Add' }).click();
       
       //NEXT BUTTON:
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Next' }).click();
       
       //ATTACHMENT IN AD TRANSFER REQUEST:
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Browse' }).click();
        const [uploadFiles] = await Promise.all([
          page.waitForEvent("filechooser"),
          page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Choose' }).click(),
        ]);
        uploadFiles.setFiles("tests/Kotak-EDPMS/Upload Files/adupload.xlsx");
        await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('Title *').click();
        await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('Title *').fill('Test');
        await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: ' Upload' }).click();
        
        //DOWNLOADING FILE:
       const download = await Promise.all([
          page.waitForEvent("download"),
          page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'download' }).click(),
      ])
       const fileName = download[0].suggestedFilename()
       await download [0].saveAs(fileName)
      
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Next' }).click();
       await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Submit' }).click();
       
       //CONFIRMATION MESSAGE
        await expect (page.frameLocator('iframe[title="widgetInIframe"]').getByRole('heading', { name: 'Confirmation' })).toHaveText('Confirmation')
        await page.frameLocator('iframe[title="widgetInIframe"]').getByText('Yes').click();
        await page.waitForTimeout(45000);
        await expect(page.frameLocator('iframe[title="widgetInIframe"]').getByText('Success', { exact: true })).toHaveText('Success')
        await expect (page.frameLocator('iframe[title="widgetInIframe"]').getByText('Your transaction is submitted successfully.')).toHaveText('Your transaction is submitted successfully.')  
      });



      test('Happy flow 4', async ({ page }) => {
        await page.goto('http://bsit-ch-d005:9080/bank/portal#/login');
        await expect(page).toHaveURL(baseurl)
        
        //ENTERING CREDENTIALS FOR LOGIN:
        await page.locator('#corporateid').click();
        await page.locator('#corporateid').fill('BLUESCOPE');
        await page.locator('#username').click();
        await page.locator('#username').fill('CHECKER1');
        await page.locator('#password').click();
        await page.locator('#password').fill('password');
        await page.getByText('Login').click();
        await expect(page).toHaveURL(loginUrl)
        
        //SELECTING EDPMS PRODUCT:
        await page.getByRole('list').locator('a').filter({hasText:'Trade/ Forex'}).click();
        await page.getByRole('list').locator('a').filter({hasText:'Exports Regularization'}).click();
        await expect(page).toHaveURL(prodUrl)
        
        //SELECTING INITIATE NEW REQUEST:
        await page.frameLocator('iframe[title="widgetInIframe"]').locator('fg-single-action').getByRole('button', { name: 'Edit Record' }).click();
        
        //SELECTING REQUEST TYPE:
        await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Request type' }).locator('span').click();
        await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'AD Transfer Request' }).click();
        
        //ADDING NEW REQUEST:
        await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Add' }).click();
        
        //SELECTING EXPORT TYPE AS GOODS:
        await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Export Type *' }).locator('div').nth(3).click();
        await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'Software' }).locator('span').first().click();
        
        
        //SELECTING OPTIONS OF EXPORT AGENCY:
        await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('combobox', { name: 'Export Agency *' }).locator('div').nth(3).click();
         
         //SELECTING SEZ: 
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('option', { name: 'SEZ' }).locator('span').first().click();


        //ENTERING SHIPPING BILL NUMBER:is disabled
         await expect(page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Shipping Bill Number')).toBeDisabled;
         
         //ENTERING FORM NUMBER
          await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Form No').click();
          await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Form No').fill('34598674');
        
         // SELECTING SHIPPING BILL DATE:
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Open calendar' }).click();
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: '2 May 2023', exact: true }).click();
         
         //ENTERING PORT CODE:
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Port Code').click();
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Port Code').fill('elc3455');
        
         //ENTERING EXISTING AD CODE:
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Existing AD Code').click();
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('dialog', { name: 'close dialog' }).getByText('Existing AD Code').fill('5678902');
         
         //ENTERING NEW AD CODE:
         await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('New AD Code *').click();
         await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('New AD Code *').fill('2345');
         
         //ADD BUTTON:
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Add' }).click();
        
         //NEXT BUTTON:
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Next' }).click();
         
         //ATTACHMENT IN AD TRANSFER REQUEST:
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Browse' }).click();
          const [uploadFiles] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Choose' }).click(),
          ]);
          uploadFiles.setFiles("tests/Kotak-EDPMS/Upload Files/adupload.xlsx");
          await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('Title *').click();
          await page.frameLocator('iframe[title="widgetInIframe"]').getByLabel('Title *').fill('Test');
          await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: ' Upload' }).click();
         
          //DOWNLOADING FILE:
         const download = await Promise.all([
            page.waitForEvent("download"),
            page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'download' }).click(),
        ])
         const fileName = download[0].suggestedFilename()
         await download [0].saveAs(fileName)
        
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Next' }).click();
         await page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Submit' }).click();

         //CONFIRMATION MESSAGE
         await expect (page.frameLocator('iframe[title="widgetInIframe"]').getByRole('heading', { name: 'Confirmation' })).toHaveText('Confirmation')
         await page.frameLocator('iframe[title="widgetInIframe"]').getByText('Yes').click();
         await page.waitForTimeout(45000);
         await expect(page.frameLocator('iframe[title="widgetInIframe"]').getByText('Success', { exact: true })).toHaveText('Success')
         await expect (page.frameLocator('iframe[title="widgetInIframe"]').getByText('Your transaction is submitted successfully')).toHaveText('Your transaction is submitted successfully.')
           
        });
    

      
