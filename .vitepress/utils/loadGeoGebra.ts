// .vitepress/utils/loadGeoGebra.ts

/**
 * Event object dispatched to client listeners registered via `registerClientListener`[cite: 1].
 */
export interface ClientEvent {
  /**
   * The name/type of the client event (e.g., 'mouseDown', 'select', 'setMode', 'viewChanged2D')[cite: 1].
   */
  type:
    | 'addMacro'
    | 'addPolygon'
    | 'addPolygonComplete'
    | 'algebraPanelSelected'
    | 'deleteGeos'
    | 'deselect'
    | 'dragEnd'
    | 'dropdownClosed'
    | 'dropdownItemFocused'
    | 'dropdownOpened'
    | 'editorKeyTyped'
    | 'editorStart'
    | 'editorStop'
    | 'export'
    | 'mouseDown'
    | 'movedGeos'
    | 'movingGeos'
    | 'openDialog'
    | 'openMenu'
    | 'pasteElms'
    | 'pasteElmsComplete'
    | 'perspectiveChange'
    | 'redo'
    | 'relationTool'
    | 'removeMacro'
    | 'renameComplete'
    | 'renameMacro'
    | 'select'
    | 'setMode'
    | 'showNavigationBar'
    | 'showStyleBar'
    | 'sidePanelClosed'
    | 'sidePanelOpened'
    | 'tablePanelSelected'
    | 'toolsPanelSelected'
    | 'undo'
    | 'updateStyle'
    | 'viewChanged2D'
    | 'viewChanged3D'
  /** Label of the construction element related to the event, if applicable[cite: 1]. */
  target?: string
  /** Additional information based on the event type (e.g., mode number or object labels)[cite: 1]. */
  argument?: string | string[]
  /** Index of the selected/focused item (e.g., in dropdowns)[cite: 1]. */
  index?: number
  /** Pixel coordinate X for pointer events[cite: 1]. */
  x?: number
  /** Pixel coordinate Y for pointer events[cite: 1]. */
  y?: number
  /** Horizontal pixel position of point (0,0)[cite: 1]. */
  xZero?: number
  /** Vertical pixel position of point (0,0)[cite: 1]. */
  yZero?: number
  /** Ratio of pixels to horizontal units[cite: 1]. */
  xscale?: number
  /** Ratio of pixels to vertical units[cite: 1]. */
  yscale?: number
  /** Graphics view ID (e.g., 1 for View 1, 2 for View 2)[cite: 1]. */
  viewNo?: number
  [key: string]: unknown
}

/** Callback for low-level UI client events[cite: 1]. */
export type ClientListener = (event: ClientEvent) => void

/** Callback invoked when an object is added, updated, clicked, or removed[cite: 1]. */
export type ObjectListener = (objName: string) => void

/** Callback invoked when an object is renamed[cite: 1]. */
export type RenameListener = (oldObjName: string, newObjName: string) => void

/**
 * Interface representing the complete GeoGebra Apps JavaScript API[cite: 1].
 */
export interface GeoGebraAppApi {
  // ==========================================
  // Creating Objects
  // ==========================================

  /**
   * Evaluates a GeoGebra command string as if entered into the input bar[cite: 1].
   * From version 3.2, multiple commands can be separated by `\n`[cite: 1].
   * @param cmdString - GeoGebra command string (must use English command names)[cite: 1].
   * @returns `true` if command evaluation succeeded[cite: 1].
   */
  evalCommand(cmdString: string): boolean

  /**
   * Evaluates a LaTeX string to create a construction element[cite: 1].
   * @param input - LaTeX syntax (e.g., `\frac`, `x^{2}`)[cite: 1].
   * @returns `true` if evaluation succeeded[cite: 1].
   */
  evalLaTeX(input: string): boolean

  /**
   * Evaluates a command string and returns a comma-separated list of labels of the created objects[cite: 1].
   * @param cmdString - GeoGebra command string[cite: 1].
   * @returns Comma-separated labels string (e.g. `"A, B, C"`)[cite: 1].
   */
  evalCommandGetLabels(cmdString: string): string

  /**
   * Evaluates a string via GeoGebra's Computer Algebra System (CAS)[cite: 1].
   * @param string - Expression to send to CAS[cite: 1].
   * @returns String representation of the result[cite: 1].
   */
  evalCommandCAS(string: string): string

  /**
   * Inserts an embedded element with a specific type and URI[cite: 1].
   * @param type - Type of embed[cite: 1].
   * @param uri - Resource URI[cite: 1].
   */
  insertEmbed(type: string, uri: string): void

  // ==========================================
  // Setting Object State
  // ==========================================

  /**
   * Deletes the object with the given name[cite: 1].
   * @param objName - Name of the target object[cite: 1].
   */
  deleteObject(objName: string): void

  /**
   * Sets whether an object is designated as an auxiliary object[cite: 1].
   * @param objName - Name of the object[cite: 1].
   * @param isAuxiliary - Auxiliary state flag[cite: 1].
   */
  setAuxiliary(objName: string, isAuxiliary: boolean): void

  /**
   * Sets the numeric or boolean value of an object[cite: 1].
   * @param objName - Name of the object[cite: 1].
   * @param value - Numeric value (use `1` for `true` and `0` for `false` if boolean)[cite: 1].
   */
  setValue(objName: string, value: number): void

  /**
   * Sets the string value of a text object[cite: 1].
   * @param objName - Name of the text object[cite: 1].
   * @param value - Text content[cite: 1].
   */
  setTextValue(objName: string, value: string): void

  /**
   * Sets the numeric value of a specific element inside a list object[cite: 1].
   * @param objName - Name of the list object[cite: 1].
   * @param index - 1-based index in the list[cite: 1].
   * @param value - Value to set[cite: 1].
   */
  setListValue(objName: string, index: number, value: number): void

  /**
   * Sets the Cartesian coordinates of points, vectors, lines, or UI elements[cite: 1].
   * @param objName - Target object label[cite: 1].
   * @param x - X coordinate[cite: 1].
   * @param y - Y coordinate[cite: 1].
   * @param z - Optional Z coordinate for 3D elements[cite: 1].
   */
  setCoords(objName: string, x: number, y: number, z?: number): void

  /**
   * Sets the display caption of an object[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param caption - New caption string[cite: 1].
   */
  setCaption(objName: string, caption: string): void

  /**
   * Sets the color of an object using RGB values (0–255)[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param red - Red component (0–255)[cite: 1].
   * @param green - Green component (0–255)[cite: 1].
   * @param blue - Blue component (0–255)[cite: 1].
   */
  setColor(objName: string, red: number, green: number, blue: number): void

  /**
   * Sets visibility of an object in the graphics view[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param visible - `true` to show, `false` to hide[cite: 1].
   */
  setVisible(objName: string, visible: boolean): void

  /**
   * Shows or hides the label of an object[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param visible - Visibility status of label[cite: 1].
   */
  setLabelVisible(objName: string, visible: boolean): void

  /**
   * Sets label display style (0 = NAME, 1 = NAME_VALUE, 2 = VALUE, 3 = CAPTION)[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param style - Label style integer[cite: 1].
   */
  setLabelStyle(objName: string, style: number): void

  /**
   * Locks or unlocks object movement and selection[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param fixed - If `true`, object cannot be modified[cite: 1].
   * @param selectionAllowed - Optional flag allowing selection of fixed objects[cite: 1].
   */
  setFixed(objName: string, fixed: boolean, selectionAllowed?: boolean): void

  /**
   * Enables or disables trace for an object[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param flag - Trace activation flag[cite: 1].
   */
  setTrace(objName: string, flag: boolean): void

  /**
   * Renames an existing object[cite: 1].
   * @param oldObjName - Original object name[cite: 1].
   * @param newObjName - Target object name[cite: 1].
   * @returns `true` if rename was successful[cite: 1].
   */
  renameObject(oldObjName: string, newObjName: string): boolean

  /**
   * Assigns an object to a specific layer (0 to 9)[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param layer - Layer number[cite: 1].
   */
  setLayer(objName: string, layer: number): void

  /**
   * Shows or hides all objects residing on a given layer[cite: 1].
   * @param layer - Layer index[cite: 1].
   * @param visible - Layer visibility flag[cite: 1].
   */
  setLayerVisible(layer: number, visible: boolean): void

  /**
   * Sets line style (0 to 4)[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param style - Line style integer[cite: 1].
   */
  setLineStyle(objName: string, style: number): void

  /**
   * Sets line thickness (1 to 13, -1 for default)[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param thickness - Thickness integer[cite: 1].
   */
  setLineThickness(objName: string, thickness: number): void

  /**
   * Sets point style (-1 = default, 0 = filled circle, 1 = cross, 2 = circle, 3 = plus, etc.)[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param style - Style integer[cite: 1].
   */
  setPointStyle(objName: string, style: number): void

  /**
   * Sets point size (1 to 9)[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param size - Point size integer[cite: 1].
   */
  setPointSize(objName: string, size: number): void

  /**
   * Sets display style for functions/curves ("parametric", "explicit", "implicit", "specific")[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param style - Display style string[cite: 1].
   */
  setDisplayStyle(objName: string, style: string): void

  /**
   * Sets the opacity fill value for a 2D shape (0.0 to 1.0)[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param filling - Filling opacity[cite: 1].
   */
  setFilling(objName: string, filling: number): void

  /** Adjusts boundaries of the graphics view so all visible elements are shown[cite: 1]. */
  showAllObjects(): void

  /**
   * Registers a resolver function for custom embeds in Notes[cite: 1].
   * @param type - Embed type identifier[cite: 1].
   * @param callback - Function returning a Promise resolving to HTML string[cite: 1].
   */
  registerEmbedResolver(type: string, callback: (id: string) => Promise<string>): void

  // ==========================================
  // Automatic Animation
  // ==========================================

  /**
   * Marks an object for animation (must call `startAnimation` to run)[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param animate - Animation flag[cite: 1].
   */
  setAnimating(objName: string, animate: boolean): void

  /**
   * Sets animation speed multiplier for an object[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param speed - Speed value[cite: 1].
   */
  setAnimationSpeed(objName: string, speed: number): void

  /** Starts running automatic animation for all objects with animation flag enabled[cite: 1]. */
  startAnimation(): void

  /** Stops all active automatic animations[cite: 1]. */
  stopAnimation(): void

  /** Returns whether automatic animation is currently running[cite: 1]. */
  isAnimationRunning(): boolean

  // ==========================================
  // Getting Object State
  // ==========================================

  /** Returns Cartesian X-coordinate of an object[cite: 1]. */
  getXcoord(objName: string): number

  /** Returns Cartesian Y-coordinate of an object[cite: 1]. */
  getYcoord(objName: string): number

  /** Returns Cartesian Z-coordinate of a 3D object[cite: 1]. */
  getZcoord(objName: string): number

  /** Returns numeric value of object (e.g. segment length, area, slider value)[cite: 1]. */
  getValue(objName: string): number

  /** Returns numeric value of element at 1-based index in a list[cite: 1]. */
  getListValue(objName: string, index: number): number

  /** Returns object color as uppercase Hex string (e.g., `"#FF0000"`)[cite: 1]. */
  getColor(objName: string): string

  /** Checks if object is visible in specified graphics view[cite: 1]. */
  getVisible(objName: string, view?: number): boolean

  /**
   * Returns string representation of object value[cite: 1].
   * @param objName - Object label[cite: 1].
   * @param useLocalizedInput - Optional boolean (default `true`)[cite: 1].
   */
  getValueString(objName: string, useLocalizedInput?: boolean): string

  /** Returns original definition string of object[cite: 1]. */
  getDefinitionString(objName: string): string

  /** Returns underlying command definition of object[cite: 1]. */
  getCommandString(objName: string, useLocalizedInput?: boolean): string

  /** Returns value formatted in LaTeX syntax[cite: 1]. */
  getLaTeXString(objName: string): string

  /** Returns base64 PNG rendering of object rendered as LaTeX[cite: 1]. */
  getLaTeXBase64(objName: string, value: boolean): string

  /** Returns type string of object (e.g., `"point"`, `"line"`, `"circle"`)[cite: 1]. */
  getObjectType(objName: string): string

  /** Checks if an object with given name exists[cite: 1]. */
  exists(objName: string): boolean

  /** Checks if object's calculated value is currently valid[cite: 1]. */
  isDefined(objName: string): boolean

  /** Checks if object is free/independent[cite: 1]. */
  isIndependent(objName: string): boolean

  /** Checks if object can be dragged/moved by user[cite: 1]. */
  isMoveable(objName: string): boolean

  /** Returns array of all construction object labels[cite: 1]. */
  getAllObjectNames(type?: string): string[]

  /** Returns count of construction objects[cite: 1]. */
  getObjectNumber(): number

  /** Returns count of active CAS cells[cite: 1]. */
  getCASObjectNumber(): number

  /** Returns name of n-th object in construction[cite: 1]. */
  getObjectName(i: number): string

  /** Returns layer index of object[cite: 1]. */
  getLayer(objName: string): string

  /** Returns line style integer (0–4)[cite: 1]. */
  getLineStyle(objName: string): number

  /** Returns line thickness integer (1–13)[cite: 1]. */
  getLineThickness(objName: string): number

  /** Returns point style integer (-1–9)[cite: 1]. */
  getPointStyle(objName: string): number

  /** Returns point size (1–9)[cite: 1]. */
  getPointSize(objName: string): number

  /** Returns opacity filling level (0.0–1.0)[cite: 1]. */
  getFilling(objName: string): number

  /** Returns object caption[cite: 1]. */
  getCaption(objName: string, substitutePlaceholders?: boolean): string

  /** Returns label style integer[cite: 1]. */
  getLabelStyle(objName: string): number

  /** Returns label visibility state[cite: 1]. */
  getLabelVisible(objName?: string): boolean

  /** Returns whether object exists and is keyboard/TAB accessible[cite: 1]. */
  isInteractive(objName: string): boolean

  // ==========================================
  // Construction / User Interface
  // ==========================================

  /**
   * Sets mouse mode/tool[cite: 1].
   * @param mode - Toolbar mode index integer[cite: 1].
   */
  setMode(mode: number): void

  /** Gets active mouse tool mode[cite: 1]. */
  getMode(): number

  /** Opens a construction file from absolute/relative URL[cite: 1]. */
  openFile(strURL: string): void

  /** Reloads initial state of construction[cite: 1]. */
  reset(): void

  /** Clears all objects from current workspace[cite: 1]. */
  newConstruction(): void

  /** Refreshes graphics views and clears all traces[cite: 1]. */
  refreshViews(): void

  /** Toggles creation of points on-the-fly when clicking canvas[cite: 1]. */
  setOnTheFlyPointCreationActive(flag: boolean): void

  /**
   * Sets point capture mode[cite: 1].
   * @param view - 1 = Graphics, 2 = Graphics 2, -1 = 3D[cite: 1].
   * @param mode - 0 = none, 1 = snap, 2 = fixed, 3 = auto[cite: 1].
   */
  setPointCapture(view: number, mode: number): void

  /**
   * Sets global rounding configuration[cite: 1].
   * @param round - String specifying precision (e.g. `"10s"`, `"5"`, `3`)[cite: 1].
   */
  setRounding(round: string | number): void

  /** Hides mouse cursor while dragging objects[cite: 1]. */
  hideCursorWhenDragging(flag: boolean): void

  /** Enables or disables canvas repainting (useful for batch operations)[cite: 1]. */
  setRepaintingActive(flag: boolean): void

  /** Enables or disables UI error dialog popups[cite: 1]. */
  setErrorDialogsActive(flag: boolean): void

  /** Configures Cartesian bounds for 2D or 3D views[cite: 1]. */
  setCoordSystem(xmin: number, xmax: number, ymin: number, ymax: number, zmin?: number, zmax?: number, verticalY?: boolean): void

  /** Shows/hides axes in 2D views[cite: 1]. */
  setAxesVisible(xAxis: boolean, yAxis: boolean): void
  /** Shows/hides axes in specific graphics view[cite: 1]. */
  setAxesVisible(viewNumber: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void

  /** Sets custom axis labels[cite: 1]. */
  setAxisLabels(viewNumber: number, xAxis: string, yAxis: string, zAxis: string): void

  /** Sets axis distance step intervals[cite: 1]. */
  setAxisSteps(viewNumber: number, xAxis: number, yAxis: number, zAxis: number): void

  /** Sets axis display unit labels[cite: 1]. */
  setAxisUnits(viewNumber: number, xAxis: string, yAxis: string, zAxis: string): void

  /** Shows or hides background coordinate grid[cite: 1]. */
  setGridVisible(flag: boolean): void
  setGridVisible(viewNumber: number, flag: boolean): void

  /** Gets grid visibility state for view[cite: 1]. */
  getGridVisible(viewNumber?: number): boolean

  /** Returns XML string representing active perspective layout[cite: 1]. */
  getPerspectiveXML(): string

  /** Saves an undo point in history[cite: 1]. */
  setUndoPoint(): void

  /** Undoes previous user action[cite: 1]. */
  undo(): void

  /** Redoes undone user action[cite: 1]. */
  redo(): void

  /** Shows or hides main toolbar[cite: 1]. */
  showToolBar(show: boolean): void

  /** Configures custom toolbar layout[cite: 1]. */
  setCustomToolBar(toolbar: string): void

  /** Adds custom button/tool into Notes toolbar[cite: 1]. */
  addCustomTool(iconURL: string, name: string, category: string, callback: () => void): void

  /** Shows or hides app menu bar[cite: 1]. */
  showMenuBar(show: boolean): void

  /** Shows or hides Algebra input field[cite: 1]. */
  showAlgebraInput(show: boolean): void

  /** Shows or hides reset icon[cite: 1]. */
  showResetIcon(show: boolean): void

  /** Enables or disables right-click context menus[cite: 1]. */
  enableRightClick(enable: boolean): void

  /** Enables or disables dragging of object labels[cite: 1]. */
  enableLabelDrags(enable: boolean): void

  /** Enables or disables zooming/panning canvas[cite: 1]. */
  enableShiftDragZoom(enable: boolean): void

  /** Enables or disables CAS functionality[cite: 1]. */
  enableCAS(enable: boolean): void

  /** Enables or disables 3D view features[cite: 1]. */
  enable3D(enable: boolean): void

  /** Switches active layout perspective string[cite: 1]. */
  setPerspective(perspective: string): void

  /** Sets applet width in pixels[cite: 1]. */
  setWidth(width: number): void

  /** Sets applet height in pixels[cite: 1]. */
  setHeight(height: number): void

  /** Resizes applet dimensions in pixels[cite: 1]. */
  setSize(width: number, height: number): void

  /** Recalculates workspace layout following CSS scale transformation[cite: 1]. */
  recalculateEnvironments(): void

  /** Gets active state of equation editor[cite: 1]. */
  getEditorState(): Record<string, unknown>

  /** Sets equation editor state[cite: 1]. */
  setEditorState(state: Record<string, unknown> | string): void

  /** Gets option JSON string for specified view[cite: 1]. */
  getGraphicsOptions(viewId: number): Record<string, unknown>

  /** Sets options for specified view[cite: 1]. */
  setGraphicsOptions(viewId: number, options: Record<string, unknown> | string): void

  /** Configures algebra panel options[cite: 1]. */
  setAlgebraOptions(options: Record<string, unknown> | string): void

  /** Returns properties of a view as JSON string[cite: 1]. */
  getViewProperties(viewID: number): string

  // ==========================================
  // Export / Image Generation
  // ==========================================

  /** Returns Base64-encoded PNG image string of active Graphics View[cite: 1]. */
  getPNGBase64(exportScale: number, transparent: boolean, DPI?: number): string

  /** Exports active view as SVG (downloads file or executes callback)[cite: 1]. */
  exportSVG(filename: string): void
  exportSVG(callback: (svg: string) => void): void

  /** Exports view to PDF document[cite: 1]. */
  exportPDF(scale: number, filename: string, sliderLabel?: string): void
  exportPDF(scale: number, callback: (pdf: unknown) => void, sliderLabel?: string): void

  /** Returns screenshot Base64 PNG string of full applet frame[cite: 1]. */
  getScreenshotBase64(callback: (url: string) => void): void

  /** Exports view to PNG file[cite: 1]. */
  writePNGtoFile(filename: string, exportScale: number, transparent: boolean, DPI?: number): boolean

  // ==========================================
  // Event Listeners
  // ==========================================

  /** Registers callback triggered when any object is created[cite: 1]. */
  registerAddListener(listener: ObjectListener | string): void
  unregisterAddListener(listener: ObjectListener | string): void

  /** Registers callback triggered when any object is deleted[cite: 1]. */
  registerRemoveListener(listener: ObjectListener | string): void
  unregisterRemoveListener(listener: ObjectListener | string): void

  /** Registers callback triggered when any object is updated[cite: 1]. */
  registerUpdateListener(listener: ObjectListener | string): void
  unregisterUpdateListener(listener: ObjectListener | string): void

  /** Registers callback triggered when any object is clicked[cite: 1]. */
  registerClickListener(listener: ObjectListener | string): void
  unregisterClickListener(listener: ObjectListener | string): void

  /** Registers update listener specifically for target object label[cite: 1]. */
  registerObjectUpdateListener(objName: string, listener: ObjectListener | string): void
  unregisterObjectUpdateListener(objName: string): void

  /** Registers click listener specifically for target object label[cite: 1]. */
  registerObjectClickListener(objName: string, listener: ObjectListener | string): void
  unregisterObjectClickListener(objName: string): void

  /** Registers callback triggered when object is renamed[cite: 1]. */
  registerRenameListener(listener: RenameListener | string): void
  unregisterRenameListener(objName: string): void

  /** Registers callback triggered when entire construction is cleared[cite: 1]. */
  registerClearListener(listener: (() => void) | string): void
  unregisterClearListener(listener: (() => void) | string): void

  /** Registers callback triggered whenever an undo point is logged[cite: 1]. */
  registerStoreUndoListener(listener: (() => void) | string): void
  unregisterStoreUndoListener(listener: (() => void) | string): void

  /** Registers generic event listener for low-level UI interactions[cite: 1]. */
  registerClientListener(listener: ClientListener | string): void
  unregisterClientListener(listener: ClientListener | string): void

  // ==========================================
  // File & XML Format Methods
  // ==========================================

  /** Evaluates GeoGebra XML without clearing existing construction[cite: 1]. */
  evalXML(xmlString: string): void

  /** Clears existing construction and sets contents from XML string[cite: 1]. */
  setXML(xmlString: string): void

  /** Gets construction XML string[cite: 1]. */
  getXML(objName?: string): string

  /** Gets parent algorithm XML string for dependent object[cite: 1]. */
  getAlgorithmXML(objName: string): string

  /** Returns construction as JSON bundle including assets[cite: 1]. */
  getFileJSON(): Record<string, unknown> | string

  /** Restores construction state from JSON object/string[cite: 1]. */
  setFileJSON(content: Record<string, unknown> | string): void

  /** Asynchronously or synchronously fetches Base64 string of .ggb archive[cite: 1]. */
  getBase64(): string
  getBase64(callback: (base64: string) => void): void

  /** Restores construction state from Base64 .ggb string[cite: 1]. */
  setBase64(base64String: string, callback?: () => void): void

  // ==========================================
  // Miscellaneous
  // ==========================================

  /** Prints debug string to browser console[cite: 1]. */
  debug(string: string): void

  /** Gets GeoGebra engine version[cite: 1]. */
  getVersion(): string

  /** Destroys applet instance and releases memory[cite: 1]. */
  remove(): void
}

/**
 * Configuration initialization parameters for embedding a GeoGebra Applet[cite: 3].
 */
export interface GeoGebraAppletParameters {
  // ==========================================
  // Core / Identification
  // ==========================================

  /**
   * App name preset[cite: 3]. Default: `'classic'`[cite: 3].
   * - `'graphing'`: GeoGebra Graphing Calculator[cite: 3]
   * - `'geometry'`: GeoGebra Geometry[cite: 3]
   * - `'3d'`: GeoGebra 3D Graphing Calculator[cite: 3]
   * - `'classic'`: GeoGebra Classic[cite: 3]
   * - `'suite'`: GeoGebra Calculator Suite[cite: 3]
   * - `'evaluator'`: Equation Editor[cite: 3]
   * - `'scientific'`: Scientific Calculator[cite: 3]
   * - `'notes'`: GeoGebra Notes[cite: 3]
   */
  appName?:
    | 'graphing'
    | 'geometry'
    | '3d'
    | 'classic'
    | 'suite'
    | 'evaluator'
    | 'scientific'
    | 'notes'

  /**
   * Unique identifier passed as an argument to `ggbOnInit()` when initialized[cite: 3].
   */
  id?: string

  element?: HTMLElement

  /**
   * Applet width in pixels[cite: 3]. Compulsory unless using `scaleContainerClass`[cite: 3].
   */
  width?: number

  /**
   * Applet height in pixels[cite: 3]. Compulsory unless using `scaleContainerClass`[cite: 3].
   */
  height?: number

  /**
   * GeoGebra Materials ID to load (e.g. `"RHYH3UQ8"`)[cite: 3].
   */
  material_id?: string

  /**
   * URL or path of a `.ggb` file to load[cite: 3].
   */
  filename?: string

  /**
   * Base64-encoded `.ggb` file content to load[cite: 3].
   */
  ggbBase64?: string

  // ==========================================
  // Styling & Canvas Appearance
  // ==========================================

  /**
   * Color of the border line drawn around the applet panel (as hex RGB string, e.g., `"#FFFFFF"`)[cite: 3]. Default: gray[cite: 3].
   */
  borderColor?: string | null

  /**
   * Border radius size in pixels around the applet panel[cite: 3].
   */
  borderRadius?: number

  /**
   * Enables or disables shadows for buttons[cite: 3].
   */
  buttonShadows?: boolean

  /**
   * Relative radius of a button's rounded border (0.0 to 0.9)[cite: 3]. Default: `0.2`[cite: 3].
   */
  buttonRounding?: number

  /**
   * Border color of buttons on the graphics view[cite: 3]. Hex color string[cite: 3].
   */
  buttonBorderColor?: string

  /**
   * Background color of the evaluator app (`appName = "evaluator"`)[cite: 3]. Hex color string[cite: 3].
   */
  editorBackgroundColor?: string

  /**
   * Foreground/text color of the evaluator app (`appName = "evaluator"`)[cite: 3]. Hex color string[cite: 3].
   */
  editorForegroundColor?: string

  /**
   * Whether the Graphics View and Graphics View 2 background should be transparent[cite: 3].
   */
  transparentGraphics?: boolean

  // ==========================================
  // Toolbar, Menus & UI Controls
  // ==========================================

  /**
   * States whether the main toolbar with construction mode buttons should be shown[cite: 3]. Default: `false`[cite: 3].
   */
  showToolBar?: boolean

  /**
   * States whether the toolbar help text next to toolbar buttons should be shown[cite: 3].
   */
  showToolBarHelp?: boolean

  /**
   * Sets the toolbar layout using a custom toolbar string[cite: 3]. Overrides saved toolbar from file/base64[cite: 3].
   */
  customToolBar?: string

  /**
   * Sets the Notes toolbox content using tool names or category names[cite: 3].
   */
  customToolbox?: string

  /**
   * States whether the algebra input line should be shown[cite: 3]. Default: `false`[cite: 3].
   */
  showAlgebraInput?: boolean

  /**
   * Determines whether the input bar is positioned inside algebra view, top, or bottom (`'algebra'`, `'top'`, or `'bottom'`)[cite: 3].
   */
  algebraInputPosition?: 'algebra' | 'top' | 'bottom'

  /**
   * States whether the main menu bar should be shown[cite: 3]. Default: `false`[cite: 3].
   */
  showMenuBar?: boolean

  /**
   * States whether the reset icon should be shown in the upper-right corner[cite: 3]. Default: `false`[cite: 3].
   */
  showResetIcon?: boolean

  /**
   * States whether zoom in, zoom out, and home buttons should be shown in the Graphics View[cite: 3]. Default: `false`[cite: 3].
   */
  showZoomButtons?: boolean

  /**
   * Whether the animation button should be visible[cite: 3].
   */
  showAnimationButton?: boolean

  /**
   * Whether the fullscreen button should be visible[cite: 3].
   */
  showFullscreenButton?: boolean

  /**
   * Whether suggestion buttons (e.g. special points, solve) in Algebra View should be visible[cite: 3].
   */
  showSuggestionButtons?: boolean

  /**
   * Whether the initial welcome tooltip should be shown[cite: 3].
   */
  showStartTooltip?: boolean

  /**
   * Determines whether the Style Bar can be shown[cite: 3]. Default: `false`[cite: 3].
   */
  allowStyleBar?: boolean

  /**
   * Determines whether Undo and Redo icons are shown in the toolbar[cite: 3]. Default: `true`[cite: 3].
   */
  enableUndoRedo?: boolean

  /**
   * Specifies initial layout perspective string (e.g., `"1"` for graphics view only)[cite: 3].
   */
  perspective?: string

  // ==========================================
  // Interactions & Behaviors
  // ==========================================

  /**
   * States whether right-clicking opens context menus, properties dialogs, and right-click zooming[cite: 3]. Default: `true`[cite: 3].
   */
  enableRightClick?: boolean

  /**
   * States whether labels can be dragged by users[cite: 3]. Default: `true`[cite: 3].
   */
  enableLabelDrags?: boolean

  /**
   * States whether Graphics Views can be moved using Shift/Ctrl drag or zoomed using Shift/Ctrl wheel[cite: 3]. Default: `true`[cite: 3].
   */
  enableShiftDragZoom?: boolean

  /**
   * Determines sensitivity of object selection in pixels[cite: 3]. Default: `3`[cite: 3].
   */
  capturingThreshold?: number

  /**
   * Prevents the applet from automatically requesting browser focus on initial load[cite: 3]. Default: `false`[cite: 3].
   */
  preventFocus?: boolean

  /**
   * Determines whether random numbers should be randomized on file load[cite: 3]. Default: `true`[cite: 3].
   */
  randomize?: boolean

  /**
   * Specifies a seed for random number generation[cite: 3].
   */
  randomSeed?: number

  /**
   * Determines whether error dialog popups are shown when invalid inputs are entered[cite: 3]. Default: `true`[cite: 3].
   */
  errorDialogsActive?: boolean

  // ==========================================
  // Features & Exam Mode
  // ==========================================

  /**
   * Determines whether file saving, file loading, signing in, and saving settings are enabled[cite: 3]. Default: `true`[cite: 3].
   */
  enableFileFeatures?: boolean

  /**
   * Whether 3D view features should be enabled (for exam mode)[cite: 3].
   */
  enable3D?: boolean | 'none'

  /**
   * Whether CAS features should be enabled (for exam mode)[cite: 3].
   */
  enableCAS?: boolean | 'none'

  /**
   * Disables execution of embedded JavaScript code inside material files[cite: 3].
   */
  disableJavaScript?: boolean

  // ==========================================
  // Scaling & Container Options
  // ==========================================

  /**
   * CSS class name of the container element used for responsive scaling[cite: 3].
   */
  scaleContainerClass?: string

  /**
   * When `true`, restricts applet width and calculates height automatically[cite: 3].
   */
  autoHeight?: boolean

  /**
   * Determines whether automatic scaling may scale the applet beyond its target dimensions[cite: 3]. Default: `false`[cite: 3].
   */
  allowUpscale?: boolean

  /**
   * Scaling ratio multiplier applied to the entire applet and UI elements[cite: 3]. Default: `1`[cite: 3].
   */
  scale?: number

  /**
   * Renders a preview image with a play button instead of initializing the applet immediately[cite: 3]. Default: `false`[cite: 3].
   */
  playButton?: boolean

  // ==========================================
  // Language & Precision Formatting
  // ==========================================

  /**
   * ISO language code (e.g. `"en"`, `"de"`, `"fr"`) to override automatic language detection[cite: 3].
   */
  language?: string

  /**
   * ISO country code (e.g. `"AT"`, `"US"`) used alongside `language`[cite: 3].
   */
  country?: string

  /**
   * Sets global number rounding precision (e.g., `"10"` for 10 decimals, `"10s"` for 10 significant figures)[cite: 3].
   */
  rounding?: string

  // ==========================================
  // Keyboard Options
  // ==========================================

  /**
   * Controls on-screen virtual keyboard behavior when input gains focus[cite: 3].
   * Default: `true` in evaluator app, `'auto'` in other apps[cite: 3].
   */
  showKeyboardOnFocus?: boolean | 'auto'

  /**
   * Specifies layout type of the virtual keyboard (`'scientific'`, `'normal'`, or `'notes'`)[cite: 3].
   */
  keyboardType?: 'scientific' | 'normal' | 'notes'

  /**
   * Determines whether the virtual keyboard detaches from the applet and attaches to document body or DOM[cite: 3].
   */
  detachKeyboard?: boolean | 'auto'

  /**
   * CSS selector matching DOM parent element to attach the virtual keyboard to when detached[cite: 3].
   */
  detachedKeyboardParent?: string

  /**
   * Whether evaluator editor is in text mode (`appName = "evaluator"`)[cite: 3]. Default: `false`[cite: 3].
   */
  textmode?: boolean

  // ==========================================
  // Developer & System Options
  // ==========================================

  /**
   * Toggles logging in browser console[cite: 3]. Default: `false`[cite: 3].
   */
  showLogging?: boolean

  /**
   * Controls whether GeoGebra runs `ggbOnInit()` from HTML vs embedded file JavaScript[cite: 3]. Default: `false`[cite: 3].
   */
  useBrowserForJS?: boolean

  [key: string]: unknown
}

/**
 * Interface returned by `mathApps.create(...)`[cite: 1].
 */
export interface GeoGebraApplet {
  /**
   * Injects GeoGebra applet into specified DOM element [cite: 1].
   * @param containerElement - HTML element reference [cite: 1].
   */
  inject(containerElement: HTMLElement): this

  /**
   * Resolves a Promise returning the initialized API interface instance[cite: 1].
   * @returns Promise resolving to `GeoGebraAppApi`[cite: 1].
   */
  getAPI(): Promise<GeoGebraAppApi>
}

/**
 * Root MathApps builder factory module[cite: 1].
 */
export interface GeoGebraMathApps {
  /**
   * Instantiates a new GeoGebra Applet object[cite: 1].
   * @param params - Applet parameter configurations[cite: 1].
   */
  create(params: GeoGebraAppletParameters): GeoGebraApplet
}

declare global {
  interface Window {
    mathApps?: GeoGebraMathApps
  }
}

export type GeoGebraVariant = 'webSimple' | 'web' | 'web3d'

const loadedModules = new Map<GeoGebraVariant, Promise<GeoGebraMathApps>>()

/**
 * Dynamically loads the specified GeoGebra ES Module variant using native browser imports.
 * @param variant - CDN bundle flavor to fetch (`'webSimple'`, `'web'`, or `'web3d'`).
 */
export async function loadGeoGebra(
  variant: GeoGebraVariant = 'web3d'
): Promise<GeoGebraMathApps> {
  if (loadedModules.has(variant)) {
    return loadedModules.get(variant)!
  }

  const loadPromise = (async () => {
    if (typeof window === 'undefined') {
      throw new Error('GeoGebra cannot be loaded during Server-Side Rendering (SSR).')
    }

    const cdnUrl = `https://www.geogebra.org/apps/latest/${variant}/${variant}.nocache.mjs`

    const module = await import(/* @vite-ignore */ cdnUrl)
    const mathApps = module.mathApps || window.mathApps

    if (!mathApps) {
      throw new Error(`GeoGebra mathApps instance not found after importing ${variant}.`)
    }

    return mathApps
  })()

  loadedModules.set(variant, loadPromise)
  loadPromise.catch(() => loadedModules.delete(variant))

  return loadPromise
}