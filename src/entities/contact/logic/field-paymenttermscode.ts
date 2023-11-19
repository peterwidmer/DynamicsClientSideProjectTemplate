import { Store } from '../../../../node_modules/@peterwidmer/form-store/dist/form-store'
import { ContactProperties } from '../contact-properties';

export default class FieldPaymentTermsCode {
    static IsRequired(store: Store<ContactProperties>) : void {
        const creditLimit = store.getValue("creditlimit");
        
        const isRequired = creditLimit > 0;

        var formContext = store.getFormContext();
        formContext.getAttribute("paymenttermscode").setRequiredLevel( isRequired ? "required" : "none");
    }
}