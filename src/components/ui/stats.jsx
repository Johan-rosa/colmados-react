import { ChevronDownIcon } from '@heroicons/react/16/solid'

const tabs = [
  { name: 'Colmado O7', href: '#', current: false },
  { name: 'Colmado O9', href: '#', current: false },
  { name: 'Parqueo', href: '#', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Tabs() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        <select
          defaultValue={tabs.find((tab) => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? 'page' : undefined}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}


import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

const stats = [
  { name: 'Venta acumulada', stat: '212,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: 'Venta diaria promedio', stat: '17,712', previousStat: '17,900', change: '-5%', changeType: 'increase' },
  { name: 'Venta proyectada', stat: '549,075', previousStat: '603,330', change: '4.05%', changeType: 'decrease' },
]

export default function Stats() {
  return (
    <div>
      <dl className="mt-4 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500"> ({item.previousStat})</span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0',
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon aria-hidden="true" className="-ml-1 mr-0.5 size-5 shrink-0 self-center text-green-500" />
                ) : (
                  <ArrowDownIcon aria-hidden="true" className="-ml-1 mr-0.5 size-5 shrink-0 self-center text-red-500" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}


  export {Stats, Tabs}
  