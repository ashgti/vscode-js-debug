// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/****************************************************************
 * Auto-generated by generate-cdp-api.js, do not edit manually. *
 ****************************************************************/

interface ICDPOperationClassification {
  // Domain: Accessibility

  // Domain: Animation
  'animation.animationcanceled': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!animation.animationcanceled.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'animation.animationcreated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!animation.animationcreated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'animation.animationstarted': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!animation.animationstarted.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: ApplicationCache
  'applicationcache.applicationcachestatusupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!applicationcache.applicationcachestatusupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'applicationcache.networkstateupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!applicationcache.networkstateupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Audits
  'audits.issueadded': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!audits.issueadded.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: BackgroundService
  'backgroundservice.recordingstatechanged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!backgroundservice.recordingstatechanged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'backgroundservice.backgroundserviceeventreceived': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!backgroundservice.backgroundserviceeventreceived.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Browser
  'browser.downloadwillbegin': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!browser.downloadwillbegin.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'browser.downloadprogress': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!browser.downloadprogress.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: CacheStorage

  // Domain: Cast
  'cast.sinksupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!cast.sinksupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'cast.issueupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!cast.issueupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Console
  'console.messageadded': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!console.messageadded.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: CSS
  'css.fontsupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!css.fontsupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'css.mediaqueryresultchanged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!css.mediaqueryresultchanged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'css.stylesheetadded': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!css.stylesheetadded.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'css.stylesheetchanged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!css.stylesheetchanged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'css.stylesheetremoved': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!css.stylesheetremoved.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Database
  'database.adddatabase': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!database.adddatabase.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Debugger
  'debugger.breakpointresolved': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!debugger.breakpointresolved.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'debugger.paused': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!debugger.paused.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'debugger.resumed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!debugger.resumed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'debugger.scriptfailedtoparse': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!debugger.scriptfailedtoparse.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'debugger.scriptparsed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!debugger.scriptparsed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: DeviceOrientation

  // Domain: DOM
  'dom.attributemodified': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.attributemodified.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.attributeremoved': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.attributeremoved.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.characterdatamodified': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.characterdatamodified.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.childnodecountupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.childnodecountupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.childnodeinserted': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.childnodeinserted.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.childnoderemoved': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.childnoderemoved.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.distributednodesupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.distributednodesupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.documentupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.documentupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.inlinestyleinvalidated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.inlinestyleinvalidated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.pseudoelementadded': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.pseudoelementadded.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.pseudoelementremoved': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.pseudoelementremoved.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.setchildnodes': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.setchildnodes.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.shadowrootpopped': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.shadowrootpopped.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'dom.shadowrootpushed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!dom.shadowrootpushed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: DOMDebugger

  // Domain: DOMSnapshot

  // Domain: DOMStorage
  'domstorage.domstorageitemadded': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!domstorage.domstorageitemadded.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'domstorage.domstorageitemremoved': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!domstorage.domstorageitemremoved.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'domstorage.domstorageitemupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!domstorage.domstorageitemupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'domstorage.domstorageitemscleared': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!domstorage.domstorageitemscleared.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Emulation
  'emulation.virtualtimebudgetexpired': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!emulation.virtualtimebudgetexpired.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Fetch
  'fetch.requestpaused': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!fetch.requestpaused.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'fetch.authrequired': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!fetch.authrequired.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: HeadlessExperimental
  'headlessexperimental.needsbeginframeschanged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!headlessexperimental.needsbeginframeschanged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: HeapProfiler
  'heapprofiler.addheapsnapshotchunk': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!heapprofiler.addheapsnapshotchunk.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'heapprofiler.heapstatsupdate': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!heapprofiler.heapstatsupdate.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'heapprofiler.lastseenobjectid': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!heapprofiler.lastseenobjectid.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'heapprofiler.reportheapsnapshotprogress': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!heapprofiler.reportheapsnapshotprogress.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'heapprofiler.resetprofiles': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!heapprofiler.resetprofiles.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: IndexedDB

  // Domain: Input
  'input.dragintercepted': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!input.dragintercepted.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Inspector
  'inspector.detached': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!inspector.detached.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'inspector.targetcrashed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!inspector.targetcrashed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'inspector.targetreloadedaftercrash': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!inspector.targetreloadedaftercrash.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: IO

  // Domain: JsDebug

  // Domain: LayerTree
  'layertree.layerpainted': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!layertree.layerpainted.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'layertree.layertreedidchange': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!layertree.layertreedidchange.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Log
  'log.entryadded': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!log.entryadded.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Media
  'media.playerpropertieschanged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!media.playerpropertieschanged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'media.playereventsadded': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!media.playereventsadded.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'media.playermessageslogged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!media.playermessageslogged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'media.playererrorsraised': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!media.playererrorsraised.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'media.playerscreated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!media.playerscreated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Memory

  // Domain: Network
  'network.datareceived': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.datareceived.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.eventsourcemessagereceived': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.eventsourcemessagereceived.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.loadingfailed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.loadingfailed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.loadingfinished': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.loadingfinished.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.requestintercepted': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.requestintercepted.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.requestservedfromcache': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.requestservedfromcache.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.requestwillbesent': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.requestwillbesent.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.resourcechangedpriority': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.resourcechangedpriority.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.signedexchangereceived': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.signedexchangereceived.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.responsereceived': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.responsereceived.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.websocketclosed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.websocketclosed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.websocketcreated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.websocketcreated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.websocketframeerror': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.websocketframeerror.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.websocketframereceived': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.websocketframereceived.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.websocketframesent': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.websocketframesent.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.websockethandshakeresponsereceived': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.websockethandshakeresponsereceived.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.websocketwillsendhandshakerequest': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.websocketwillsendhandshakerequest.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.webtransportcreated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.webtransportcreated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.webtransportconnectionestablished': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.webtransportconnectionestablished.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.webtransportclosed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.webtransportclosed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.requestwillbesentextrainfo': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.requestwillbesentextrainfo.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.responsereceivedextrainfo': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.responsereceivedextrainfo.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'network.trusttokenoperationdone': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!network.trusttokenoperationdone.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: NodeRuntime
  'noderuntime.waitingfordisconnect': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!noderuntime.waitingfordisconnect.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: NodeTracing
  'nodetracing.datacollected': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!nodetracing.datacollected.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'nodetracing.tracingcomplete': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!nodetracing.tracingcomplete.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: NodeWorker
  'nodeworker.attachedtoworker': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!nodeworker.attachedtoworker.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'nodeworker.detachedfromworker': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!nodeworker.detachedfromworker.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'nodeworker.receivedmessagefromworker': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!nodeworker.receivedmessagefromworker.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Overlay
  'overlay.inspectnoderequested': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!overlay.inspectnoderequested.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'overlay.nodehighlightrequested': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!overlay.nodehighlightrequested.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'overlay.screenshotrequested': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!overlay.screenshotrequested.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'overlay.inspectmodecanceled': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!overlay.inspectmodecanceled.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Page
  'page.domcontenteventfired': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.domcontenteventfired.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.filechooseropened': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.filechooseropened.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.frameattached': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.frameattached.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.frameclearedschedulednavigation': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.frameclearedschedulednavigation.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.framedetached': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.framedetached.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.framenavigated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.framenavigated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.documentopened': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.documentopened.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.frameresized': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.frameresized.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.framerequestednavigation': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.framerequestednavigation.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.frameschedulednavigation': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.frameschedulednavigation.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.framestartedloading': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.framestartedloading.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.framestoppedloading': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.framestoppedloading.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.downloadwillbegin': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.downloadwillbegin.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.downloadprogress': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.downloadprogress.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.interstitialhidden': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.interstitialhidden.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.interstitialshown': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.interstitialshown.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.javascriptdialogclosed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.javascriptdialogclosed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.javascriptdialogopening': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.javascriptdialogopening.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.lifecycleevent': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.lifecycleevent.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.loadeventfired': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.loadeventfired.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.navigatedwithindocument': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.navigatedwithindocument.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.screencastframe': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.screencastframe.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.screencastvisibilitychanged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.screencastvisibilitychanged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.windowopen': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.windowopen.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'page.compilationcacheproduced': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!page.compilationcacheproduced.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Performance
  'performance.metrics': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!performance.metrics.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: PerformanceTimeline
  'performancetimeline.timelineeventadded': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!performancetimeline.timelineeventadded.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Profiler
  'profiler.consoleprofilefinished': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!profiler.consoleprofilefinished.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'profiler.consoleprofilestarted': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!profiler.consoleprofilestarted.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'profiler.precisecoveragedeltaupdate': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!profiler.precisecoveragedeltaupdate.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Runtime
  'runtime.bindingcalled': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!runtime.bindingcalled.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'runtime.consoleapicalled': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!runtime.consoleapicalled.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'runtime.exceptionrevoked': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!runtime.exceptionrevoked.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'runtime.exceptionthrown': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!runtime.exceptionthrown.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'runtime.executioncontextcreated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!runtime.executioncontextcreated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'runtime.executioncontextdestroyed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!runtime.executioncontextdestroyed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'runtime.executioncontextscleared': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!runtime.executioncontextscleared.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'runtime.inspectrequested': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!runtime.inspectrequested.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Schema

  // Domain: Security
  'security.certificateerror': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!security.certificateerror.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'security.visiblesecuritystatechanged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!security.visiblesecuritystatechanged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'security.securitystatechanged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!security.securitystatechanged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: ServiceWorker
  'serviceworker.workererrorreported': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!serviceworker.workererrorreported.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'serviceworker.workerregistrationupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!serviceworker.workerregistrationupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'serviceworker.workerversionupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!serviceworker.workerversionupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Storage
  'storage.cachestoragecontentupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!storage.cachestoragecontentupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'storage.cachestoragelistupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!storage.cachestoragelistupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'storage.indexeddbcontentupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!storage.indexeddbcontentupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'storage.indexeddblistupdated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!storage.indexeddblistupdated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: SystemInfo

  // Domain: Target
  'target.attachedtotarget': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!target.attachedtotarget.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'target.detachedfromtarget': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!target.detachedfromtarget.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'target.receivedmessagefromtarget': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!target.receivedmessagefromtarget.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'target.targetcreated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!target.targetcreated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'target.targetdestroyed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!target.targetdestroyed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'target.targetcrashed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!target.targetcrashed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'target.targetinfochanged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!target.targetinfochanged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Tethering
  'tethering.accepted': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!tethering.accepted.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: Tracing
  'tracing.bufferusage': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!tracing.bufferusage.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'tracing.datacollected': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!tracing.datacollected.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'tracing.tracingcomplete': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!tracing.tracingcomplete.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: WebAudio
  'webaudio.contextcreated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.contextcreated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.contextwillbedestroyed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.contextwillbedestroyed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.contextchanged': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.contextchanged.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.audiolistenercreated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.audiolistenercreated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.audiolistenerwillbedestroyed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.audiolistenerwillbedestroyed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.audionodecreated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.audionodecreated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.audionodewillbedestroyed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.audionodewillbedestroyed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.audioparamcreated': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.audioparamcreated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.audioparamwillbedestroyed': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.audioparamwillbedestroyed.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.nodesconnected': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.nodesconnected.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.nodesdisconnected': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.nodesdisconnected.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.nodeparamconnected': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.nodeparamconnected.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  'webaudio.nodeparamdisconnected': { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!webaudio.nodeparamdisconnected.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };

  // Domain: WebAuthn
}
