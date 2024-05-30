import React from 'react'
import "./Shop.css"

function Shop() {
  return (
    <>
      {/* These code for the button was provided on the Stripe website */}
      
      {/* Wilson */}
      <stripe-buy-button
      buy-button-id="buy_btn_1PLUXJ2NegYeTfbF2PvX5YC3"
      publishable-key="pk_test_51PLFek2NegYeTfbF80e5GERAmZOxeJjguiGpTeGsdFs2lcY4VjqGGXcdnXpiTtdx4MitNuZjq7JkYNlrHyZcEMpP00QdrBFr9X"
      >
      </stripe-buy-button>
      {/* Wendy */}
      <stripe-buy-button
      buy-button-id="buy_btn_1PLTrd2NegYeTfbFN24QYfv6"
      publishable-key="pk_test_51PLFek2NegYeTfbF80e5GERAmZOxeJjguiGpTeGsdFs2lcY4VjqGGXcdnXpiTtdx4MitNuZjq7JkYNlrHyZcEMpP00QdrBFr9X"
      >
      </stripe-buy-button>
    </>
    
  )
}

export default Shop