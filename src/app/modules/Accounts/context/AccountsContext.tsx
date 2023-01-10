import { useEffect } from 'react';
import { createContext, useState } from 'react';

import { WithChildren } from '../../../components/components.types';
import { Account } from '../accounts.types';
import useAccountsStorage from '../hooks/useAccountsStorage';
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

  const { accountsStorage } = useAccountsStorage();

  useEffect(() => {
    if (!accounts) setAccounts(accountsStorage);
  }, [accounts, accountsStorage]);

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
