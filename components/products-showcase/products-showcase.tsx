import classNames from 'classnames'
import { Configure, Index } from 'react-instantsearch-dom'

import { Container } from '@/components/container/container'
import { indexName as defaultIndexName } from '@/utils/env'
import { InfiniteHits } from '@instantsearch/widgets/infinite-hits/infinite-hits'

export type ProductsShowcaseProps = {
  title?: string
  indexName?: string
  indexId?: string
  className?: string
  hitComponent: React.ComponentType<any>
  [index: string]: any
}
export function ProductsShowcase({
  indexName = defaultIndexName,
  indexId,
  title,
  className,
  hitComponent,
  ...searchParameters
}: ProductsShowcaseProps) {
  return (
    <Index indexName={indexName} indexId={indexId}>
      <Configure {...searchParameters} />
      <section className={classNames('py-10 laptop:py-16', className)}>
        <Container>
          {title && (
            <h2 className="text-2xl font-bold text-start  mb-3 laptop:mb-6 laptop:ml-3 laptop:heading-3">
              {title}
            </h2>
          )}
          <InfiniteHits
            hitComponent={hitComponent}
            animation={false}
            gridClassName="grid-cols-2 laptop:grid-cols-6"
          />
        </Container>
      </section>
    </Index>
  )
}
