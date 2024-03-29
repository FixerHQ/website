import { createContext, useState, useEffect } from 'react';

import { WithChildren } from '../../../components/components.types';
import { Account } from '../accounts.types';
import useAccountsStorage from '../hooks/useAccountsStorage';
import useCurrentAccountStorage from '../hooks/useCurrentAccountStorage';
import { AccountsContextValues } from './AccountsContext.types';

export const AccountsContext = createContext<AccountsContextValues>(
  {} as AccountsContextValues,
);

/**
 * Provides a context store for managing user saved accounts and
 * current active account in local cache.
 * @param children - Components tree to inject the accounts context.
 */
export function AccountsProvider({ children }: WithChildren) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [currentAccount, setCurrentAccount] = useState<Account>();

  const [accountsStorage] = useAccountsStorage();
  const [currentAccountStorage, setCurrentAccountStorage] =
    useCurrentAccountStorage();

  useEffect(() => {
    if (accounts.length === 0 && accountsStorage.length > 0)
      setAccounts(accountsStorage);
  }, [accounts, accountsStorage]);

  useEffect(() => {
    if (!currentAccount && currentAccountStorage) {
      setCurrentAccount(currentAccountStorage);
      // TODO: remove when AccountsManager is implemented.
    } else if (accountsStorage.length > 0) {
      setCurrentAccountStorage(accountsStorage[0]);
    }
  }, [
    currentAccount,
    currentAccountStorage,
    accountsStorage,
    setCurrentAccountStorage,
  ]);

  return (
    <AccountsContext.Provider
      value={{
        accounts,
        setAccounts,
        currentAccount,
        setCurrentAccount,
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
}
