import { Button } from 'antd'
import { useCallback, useState } from 'react'
import { useWallet } from 'senhub/providers'
import { explorer } from 'shared/util'

const DECIMALS = BigInt(1000000000)

const SwapButton = ({
  hops,
  onCallback = () => {},
  disabled = false,
  wrapAmount = BigInt(0),
}: {
  hops: any[]
  onCallback?: () => void
  disabled?: boolean
  wrapAmount: bigint
}) => {
  const [loading, setLoading] = useState(false)
  const {
    wallet: { address: walletAddress },
  } = useWallet()
  /**
   * Swap function
   */
  const handleSwap = useCallback(async () => {
    const { swap, splt, wallet } = window.sentre
    // Synthetize routings
    const routingAddresses = await Promise.all(
      hops.map(
        async ({
          srcMintInfo: { address: srcMintAddress },
          dstMintInfo: { address: dstMintAddress },
          poolData: { address: poolAddress },
        }) => {
          const srcAddress = await splt.deriveAssociatedAddress(
            walletAddress,
            srcMintAddress,
          )
          const dstAddress = await splt.deriveAssociatedAddress(
            walletAddress,
            dstMintAddress,
          )
          return {
            poolAddress: poolAddress,
            srcAddress: srcAddress,
            dstAddress: dstAddress,
          }
        },
      ),
    )
    console.log(routingAddresses, swap, wallet)
  }, [hops, walletAddress])

  const handleWrapSol = async () => {
    if (!wrapAmount) return
    const { swap, wallet } = window.sentre
    if (!wallet) return
    return await swap.wrapSol(wrapAmount, wallet)
  }

  const onSwap = async () => {
    try {
      await setLoading(true)
      await handleWrapSol()
      const txId = await handleSwap()
      window.notify({
        type: 'success',
        description: `Swap successfully. Click to view details.`,
        onClick: () => window.open(explorer(`${txId}`), '_blank'),
      })
      return onCallback()
    } catch (er: any) {
      return window.notify({ type: 'error', description: er.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      type="primary"
      onClick={onSwap}
      disabled={disabled}
      loading={loading}
      block
    >
      Swap
    </Button>
  )
}
export default SwapButton
