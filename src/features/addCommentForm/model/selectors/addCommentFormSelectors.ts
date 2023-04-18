
import type StoreSchema from '../../../../app/providers/StoreProvider/config/StoreSchema'

export const getAddCommentFormText = (state: StoreSchema) => state.addCommentForm?.text ?? ''
export const getAddCommentFormError = (state: StoreSchema) => state.addCommentForm?.error 
