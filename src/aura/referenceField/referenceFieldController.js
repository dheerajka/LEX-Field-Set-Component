/*
 * Copyright (c) 2016 Financial Spectra
 * All rights reserved.
 * 
 * File Name    - referenceFieldController.js
 *
 * Developer(s) - SSingh
 *
 */
({
    navigateToReferenceRecord : function(component, event, helper) {
         var selectedRecord = event.currentTarget;
         var referenceRecordId = selectedRecord.dataset.record;
         var navEvt = $A.get("e.force:navigateToSObject");
         navEvt.setParams({
             "recordId": referenceRecordId
         });
         navEvt.fire();
   	}
})