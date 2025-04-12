import { Chip } from '@heroui/react'
import { Icon } from '@iconify/react'

import { SidebarItemType } from './sidebar'
import TeamAvatar from './team-avatar'

/**
 * Please check the https://nextui.org/docs/guide/routing to have a seamless router integration
 */

export const items = [
  {
    key: 'home',
    href: '#',
    icon: 'solar:home-2-linear',
    title: 'Home'
  },
  {
    key: 'projects',
    href: '#',
    icon: 'solar:widget-2-outline',
    title: 'Projects',
    endContent: (
      <Icon
        className='text-default-400'
        icon='solar:add-circle-line-duotone'
        width={24}
      />
    )
  },
  {
    key: 'tasks',
    href: '#',
    icon: 'solar:checklist-minimalistic-outline',
    title: 'Tasks',
    endContent: (
      <Icon
        className='text-default-400'
        icon='solar:add-circle-line-duotone'
        width={24}
      />
    )
  },
  {
    key: 'team',
    href: '#',
    icon: 'solar:users-group-two-rounded-outline',
    title: 'Team'
  },
  {
    key: 'tracker',
    href: '#',
    icon: 'solar:sort-by-time-linear',
    title: 'Tracker',
    endContent: (
      <Chip size='sm' variant='flat'>
        New
      </Chip>
    )
  },
  {
    key: 'analytics',
    href: '#',
    icon: 'solar:chart-outline',
    title: 'Analytics'
  },
  {
    key: 'perks',
    href: '#',
    icon: 'solar:gift-linear',
    title: 'Perks',
    endContent: (
      <Chip size='sm' variant='flat'>
        3
      </Chip>
    )
  },
  {
    key: 'expenses',
    href: '#',
    icon: 'solar:bill-list-outline',
    title: 'Expenses'
  },
  {
    key: 'settings',
    href: '#',
    icon: 'solar:settings-outline',
    title: 'Settings'
  }
]

export const sectionItems = [
  {
    key: 'overview',
    href: '#',
    icon: 'gg:components',
    title: 'Overview'
  },
  {
    key: 'leaderboard',
    href: '#',
    icon: 'material-symbols:leaderboard-outline',
    title: 'Leaderboard'
  },
  {
    key: 'spreadsheets',
    href: '#',
    icon: 'bx:spreadsheet',
    title: 'Spreadsheets'
  },
  {
    key: 'administration',
    href: '#',
    icon: 'eos-icons:admin-outlined',
    title: 'Administration'
  },

  {
    key: 'sales',
    href: '#',
    icon: 'teenyicons:bag-alt-outline',
    title: 'Sales',
    endContent: (
      <Icon
        className='text-default-400'
        icon='dashicons:arrow-down'
        width={24}
      />
    )
  },
  {
    key: 'schedule',
    href: '#',
    icon: 'icon-park-outline:schedule',
    title: 'Schedule'
  },
  {
    key: 'teams',
    title: 'TEAMS',
    items: [
      {
        key: 'message',
        href: '#',
        icon: 'mage:message-round',
        title: 'Message'
      },
      {
        key: 'support',
        href: '#',
        icon: 'tdesign:call',
        title: 'Support'
      }
    ]
  }
]

export const sectionItemsWithTeams = [
  ...sectionItems,
  {
    key: 'your-teams',
    title: 'Your Teams',
    items: [
      {
        key: 'nextui',
        href: '#',
        title: 'NextUI',
        startContent: <TeamAvatar name='Next UI' />
      },
      {
        key: 'tailwind-variants',
        href: '#',
        title: 'Tailwind Variants',
        startContent: <TeamAvatar name='Tailwind Variants' />
      },
      {
        key: 'nextui-pro',
        href: '#',
        title: 'NextUI Pro',
        startContent: <TeamAvatar name='NextUI Pro' />
      }
    ]
  }
]

export const brandItems = [
  {
    key: 'overview',
    title: 'Overview',
    items: [
      {
        key: 'home',
        href: '#',
        icon: 'solar:home-2-linear',
        title: 'Home'
      },
      {
        key: 'projects',
        href: '#',
        icon: 'solar:widget-2-outline',
        title: 'Projects',
        endContent: (
          <Icon
            className='text-primary-foreground/60'
            icon='solar:add-circle-line-duotone'
            width={24}
          />
        )
      },
      {
        key: 'tasks',
        href: '#',
        icon: 'solar:checklist-minimalistic-outline',
        title: 'Tasks',
        endContent: (
          <Icon
            className='text-primary-foreground/60'
            icon='solar:add-circle-line-duotone'
            width={24}
          />
        )
      },
      {
        key: 'team',
        href: '#',
        icon: 'solar:users-group-two-rounded-outline',
        title: 'Team'
      },
      {
        key: 'tracker',
        href: '#',
        icon: 'solar:sort-by-time-linear',
        title: 'Tracker',
        endContent: (
          <Chip
            className='font-medium bg-primary-foreground text-primary'
            size='sm'
            variant='flat'
          >
            New
          </Chip>
        )
      }
    ]
  },
  {
    key: 'your-teams',
    title: 'Your Teams',
    items: [
      {
        key: 'nextui',
        href: '#',
        title: 'NextUI',
        startContent: (
          <TeamAvatar
            classNames={{
              base: 'border-1 border-primary-foreground/20',
              name: 'text-primary-foreground/80'
            }}
            name='Next UI'
          />
        )
      },
      {
        key: 'tailwind-variants',
        href: '#',
        title: 'Tailwind Variants',
        startContent: (
          <TeamAvatar
            classNames={{
              base: 'border-1 border-primary-foreground/20',
              name: 'text-primary-foreground/80'
            }}
            name='Tailwind Variants'
          />
        )
      },
      {
        key: 'nextui-pro',
        href: '#',
        title: 'NextUI Pro',
        startContent: (
          <TeamAvatar
            classNames={{
              base: 'border-1 border-primary-foreground/20',
              name: 'text-primary-foreground/80'
            }}
            name='NextUI Pro'
          />
        )
      }
    ]
  }
]

export const sectionLongList = [
  ...sectionItems,
  {
    key: 'payments',
    title: 'Payments',
    items: [
      {
        key: 'payroll',
        href: '#',
        title: 'Payroll',
        icon: 'solar:dollar-minimalistic-linear'
      },
      {
        key: 'invoices',
        href: '#',
        title: 'Invoices',
        icon: 'solar:file-text-linear'
      },
      {
        key: 'billing',
        href: '#',
        title: 'Billing',
        icon: 'solar:card-outline'
      },
      {
        key: 'payment-methods',
        href: '#',
        title: 'Payment Methods',
        icon: 'solar:wallet-money-outline'
      },
      {
        key: 'payouts',
        href: '#',
        title: 'Payouts',
        icon: 'solar:card-transfer-outline'
      }
    ]
  },
  {
    key: 'your-teams',
    title: 'Your Teams',
    items: [
      {
        key: 'nextui',
        href: '#',
        title: 'NextUI',
        startContent: <TeamAvatar name='Next UI' />
      },
      {
        key: 'tailwind-variants',
        href: '#',
        title: 'Tailwind Variants',
        startContent: <TeamAvatar name='Tailwind Variants' />
      },
      {
        key: 'nextui-pro',
        href: '#',
        title: 'NextUI Pro',
        startContent: <TeamAvatar name='NextUI Pro' />
      }
    ]
  }
]

export const sectionNestedItems = [
  {
    key: 'home',
    href: '#',
    icon: 'solar:home-2-linear',
    title: 'Home'
  },
  {
    key: 'projects',
    href: '#',
    icon: 'solar:widget-2-outline',
    title: 'Projects',
    endContent: (
      <Icon
        className='text-default-400'
        icon='solar:add-circle-line-duotone'
        width={24}
      />
    )
  },
  {
    key: 'tasks',
    href: '#',
    icon: 'solar:checklist-minimalistic-outline',
    title: 'Tasks',
    endContent: (
      <Icon
        className='text-default-400'
        icon='solar:add-circle-line-duotone'
        width={24}
      />
    )
  },
  {
    key: 'team',
    href: '#',
    icon: 'solar:users-group-two-rounded-outline',
    title: 'Team'
  },
  {
    key: 'tracker',
    href: '#',
    icon: 'solar:sort-by-time-linear',
    title: 'Tracker',
    endContent: (
      <Chip size='sm' variant='flat'>
        New
      </Chip>
    )
  },
  {
    key: 'analytics',
    href: '#',
    icon: 'solar:chart-outline',
    title: 'Analytics'
  },
  {
    key: 'perks',
    href: '#',
    icon: 'solar:gift-linear',
    title: 'Perks',
    endContent: (
      <Chip size='sm' variant='flat'>
        3
      </Chip>
    )
  },
  {
    key: 'cap_table',
    title: 'Cap Table',
    icon: 'solar:pie-chart-2-outline',
    type: SidebarItemType.Nest,
    items: [
      {
        key: 'shareholders',
        icon: 'solar:users-group-rounded-linear',
        href: '#',
        title: 'Shareholders'
      },
      {
        key: 'note_holders',
        icon: 'solar:notes-outline',
        href: '#',
        title: 'Note Holders'
      },
      {
        key: 'transactions_log',
        icon: 'solar:clipboard-list-linear',
        href: '#',
        title: 'Transactions Log'
      }
    ]
  },
  {
    key: 'expenses',
    href: '#',
    icon: 'solar:bill-list-outline',
    title: 'Expenses'
  }
]
