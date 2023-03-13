import { type AppDispath } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

export const useAppDispath = () => useDispatch<AppDispath>()