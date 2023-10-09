import { useAccountStore } from '@src/state/account/accountStore'
import { type IAccount } from '@src/types'

export const deleteAccount = (account: IAccount): void => {
  useAccountStore.setState((state) => {
    state.accounts.filter(
      (a) =>
        a.instance.toLowerCase() !== account.instance.toLowerCase() &&
        a.username.toLowerCase() !== account.username.toLowerCase(),
    )
  })
}