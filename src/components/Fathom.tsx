import { useLocation } from '@docusaurus/router'
import React, { useEffect } from 'react'

const Fathom = () => {
  const location = useLocation()

  const siteIdByPathname = (pathname: string) => {
    const normalizedPathname = pathname.replace(/\/$/, '')
    switch (normalizedPathname) {
      case '/secure-ethereum-scalability': // 1
        return 'MMVYR'
      case '/secure-cloudless-storage': // 2
        return 'UPXGR'
      case '/secure-video-storage': // 3
        return 'CHVAV'
      case '/persistent-file-sharing': // 4
        return 'NBVHN'
      case '/reliable-data-backup': // 5
        return 'JCUAD'
      case '/decentralised-content-distribution': // 6
        return 'RLBTD'
      case '/secure-cloudless-storage': // 7
        return 'PIGBE'
      case '/censorship-resistant-streaming': // 8
        return 'EXYRI'
      case '/secure-custodianless-data': // 9
        return 'YQKOR'
      case '/decentralised-database': // 10
        return 'YSSAK'
      case '/secure-data-collaboration': // 11
        return 'YXVJE'
      case '/data-durability-engine': // 12
        return 'SXWAH'
      case '/durability-focused-storage': // 13
        return 'HKOPS'
      case '/efficient-decentralised-storage': // 14
        return 'RVMAH'
      case '/future-of-dsns': // 15
        return 'JRBPJ'
      case '/decentralised-storage-marketplace': // 16
        return 'HJLUS'
      case '/cryptographic-data-security': // 17
        return 'KIGPW'
      case '/join-codex-community': // 18
        return 'AMQOU'
      default:
        return ''
    }
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.innerHTML = `(function(f, a, t, h, o, m){
	a[h]=a[h]||function(){
		(a[h].q=a[h].q||[]).push(arguments)
	};
	o=f.createElement('script'),
	m=f.getElementsByTagName('script')[0];
	o.async=1; o.src=t; o.id='fathom-script';
	m.parentNode.insertBefore(o,m)
})(document, window, '//fathom.bi.status.im/tracker.js', 'fathom');
fathom('set', 'siteId', '${siteIdByPathname(location.pathname)}');
fathom('trackPageview');`
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <></>
}

export default Fathom
