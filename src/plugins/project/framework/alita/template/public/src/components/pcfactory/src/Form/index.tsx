import Form from './Form';
import { FormFields as Item, useForm } from '../utils';

type FormType = typeof Form;

(Form as any).Item = Item;

(Form as any).useForm = useForm;

const formInstance = Form as FormType & { Item: typeof Item, useForm: typeof useForm };

export default formInstance;
