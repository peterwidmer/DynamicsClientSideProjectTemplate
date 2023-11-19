import { ContactProperties } from './contact-properties';
import { CreateStore, Store } from '../../../node_modules/@peterwidmer/form-store/dist/form-store'
import FieldPaymentTermsCode from './logic/field-paymenttermscode';


namespace contactform {
    let store: Store<ContactProperties> | null = null;

    export function OnLoad(context: Xrm.Events.EventContext) {
        store = CreateStore(context);
        store.register(FieldPaymentTermsCode.IsRequired, ["creditlimit"]);
        store.completeRegistration();
    }
}