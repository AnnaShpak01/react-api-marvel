import { getProducers, IProducer } from '@/lib/api/api'
import * as mobx from 'mobx'
import RootStore from './RootStore'

interface IProducersStoreProps {
  error: Error | null
  pending: boolean
  producers: IProducer[]
}

export default class ProducersStore implements IProducersStoreProps {
  error: Error | null = null
  pending = false
  producers: IProducer[] = []
  rootStore: RootStore

  async getProducersList() {
    this.set('producers', await getProducers())
  }

  /**
   * Helper to set values through mobx actions.
   */
  set(prop: keyof IProducersStoreProps, value: any) {
    ;(this[prop] as any) = value
  }

  /**
   * Helper to assign multiple props values through a mobx action.
   */
  assign(props: Partial<IProducersStoreProps>) {
    Object.assign(this, props)
  }

  clearError() {
    this.set('error', null)
  }

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    mobx.makeAutoObservable(this, { rootStore: false }, { autoBind: true, deep: false })
  }
}
