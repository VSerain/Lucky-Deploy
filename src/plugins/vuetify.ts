// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify, {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VAlert,
    VAutocomplete,
    VAvatar,
    VBadge,
    VBanner,
    VBottomNavigation,
    VBottomSheet,
    VBreadcrumbs,
    VBreadcrumbsItem,
    VBreadcrumbsDivider,
    VBtn,
    VBtnToggle,
    VCalendar,
    VCalendarDaily,
    VCalendarWeekly,
    VCalendarMonthly,
    VCard,
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle,
    VCarousel,
    VCarouselItem,
    VCheckbox,
    VSimpleCheckbox,
    VChip,
    VChipGroup,
    VColorPicker,
    VColorPickerSwatches,
    VColorPickerCanvas,
    VContent,
    VCombobox,
    VCounter,
    VData,
    VDataIterator,
    VDataFooter,
    VDataTable,
    VEditDialog,
    VTableOverflow,
    VDataTableHeader,
    VSimpleTable,
    VVirtualTable,
    VDatePicker,
    VDatePickerTitle,
    VDatePickerHeader,
    VDatePickerDateTable,
    VDatePickerMonthTable,
    VDatePickerYears,
    VDialog,
    VDivider,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VFileInput,
    VFooter,
    VForm,
    VContainer,
    VCol,
    VRow,
    VSpacer,
    VLayout,
    VFlex,
    VHover,
    VIcon,
    VImg,
    VInput,
    VItem,
    VItemGroup,
    VLabel,
    VLazy,
    VListItemActionText,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle,
    VList,
    VListGroup,
    VListItem,
    VListItemAction,
    VListItemAvatar,
    VListItemIcon,
    VListItemGroup,
    VMenu,
    VMessages,
    VNavigationDrawer,
    VOverflowBtn,
    VOverlay,
    VPagination,
    VSheet,
    VParallax,
    VPicker,
    VProgressCircular,
    VProgressLinear,
    VRadioGroup,
    VRadio,
    VRangeSlider,
    VRating,
    VResponsive,
    VSelect,
    VSkeletonLoader,
    VSlider,
    VSlideGroup,
    VSlideItem,
    VSnackbar,
    VSparkline,
    VSpeedDial,
    VStepper,
    VStepperContent,
    VStepperStep,
    VStepperHeader,
    VStepperItems,
    VSubheader,
    VSwitch,
    VSystemBar,
    VTabs,
    VTab,
    VTabItem,
    VTabsItems,
    VTabsSlider,
    VTextarea,
    VTextField,
    VTimeline,
    VTimelineItem,
    VTimePicker,
    VTimePickerClock,
    VTimePickerTitle,
    VToolbar,
    VToolbarItems,
    VToolbarTitle,
    VTooltip,
    VTreeview,
    VTreeviewNode,
    VWindow,
    VWindowItem,
    VCarouselTransition,
    VCarouselReverseTransition,
    VTabTransition,
    VTabReverseTransition,
    VMenuTransition,
    VFabTransition,
    VDialogTransition,
    VDialogBottomTransition,
    VFadeTransition,
    VScaleTransition,
    VScrollXTransition,
    VScrollXReverseTransition,
    VScrollYTransition,
    VScrollYReverseTransition,
    VSlideXTransition,
    VSlideXReverseTransition,
    VSlideYTransition,
    VSlideYReverseTransition,
    VExpandTransition,
    VExpandXTransition,
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VApp,
        VAppBar,
        VAppBarNavIcon,
        VAlert,
        VAutocomplete,
        VAvatar,
        VBadge,
        VBanner,
        VBottomNavigation,
        VBottomSheet,
        VBreadcrumbs,
        VBreadcrumbsItem,
        VBreadcrumbsDivider,
        VBtn,
        VBtnToggle,
        VCalendar,
        VCalendarDaily,
        VCalendarWeekly,
        VCalendarMonthly,
        VCard,
        VCardActions,
        VCardSubtitle,
        VCardText,
        VCardTitle,
        VCarousel,
        VCarouselItem,
        VCheckbox,
        VSimpleCheckbox,
        VChip,
        VChipGroup,
        VColorPicker,
        VColorPickerSwatches,
        VColorPickerCanvas,
        VContent,
        VCombobox,
        VCounter,
        VData,
        VDataIterator,
        VDataFooter,
        VDataTable,
        VEditDialog,
        VTableOverflow,
        VDataTableHeader,
        VSimpleTable,
        VVirtualTable,
        VDatePicker,
        VDatePickerTitle,
        VDatePickerHeader,
        VDatePickerDateTable,
        VDatePickerMonthTable,
        VDatePickerYears,
        VDialog,
        VDivider,
        VExpansionPanels,
        VExpansionPanel,
        VExpansionPanelHeader,
        VExpansionPanelContent,
        VFileInput,
        VFooter,
        VForm,
        VContainer,
        VCol,
        VRow,
        VSpacer,
        VLayout,
        VFlex,
        VHover,
        VIcon,
        VImg,
        VInput,
        VItem,
        VItemGroup,
        VLabel,
        VLazy,
        VListItemActionText,
        VListItemContent,
        VListItemTitle,
        VListItemSubtitle,
        VList,
        VListGroup,
        VListItem,
        VListItemAction,
        VListItemAvatar,
        VListItemIcon,
        VListItemGroup,
        VMenu,
        VMessages,
        VNavigationDrawer,
        VOverflowBtn,
        VOverlay,
        VPagination,
        VSheet,
        VParallax,
        VPicker,
        VProgressCircular,
        VProgressLinear,
        VRadioGroup,
        VRadio,
        VRangeSlider,
        VRating,
        VResponsive,
        VSelect,
        VSkeletonLoader,
        VSlider,
        VSlideGroup,
        VSlideItem,
        VSnackbar,
        VSparkline,
        VSpeedDial,
        VStepper,
        VStepperContent,
        VStepperStep,
        VStepperHeader,
        VStepperItems,
        VSubheader,
        VSwitch,
        VSystemBar,
        VTabs,
        VTab,
        VTabItem,
        VTabsItems,
        VTabsSlider,
        VTextarea,
        VTextField,
        VTimeline,
        VTimelineItem,
        VTimePicker,
        VTimePickerClock,
        VTimePickerTitle,
        VToolbar,
        VToolbarItems,
        VToolbarTitle,
        VTooltip,
        VTreeview,
        VTreeviewNode,
        VWindow,
        VWindowItem,
        VCarouselTransition,
        VCarouselReverseTransition,
        VTabTransition,
        VTabReverseTransition,
        VMenuTransition,
        VFabTransition,
        VDialogTransition,
        VDialogBottomTransition,
        VFadeTransition,
        VScaleTransition,
        VScrollXTransition,
        VScrollXReverseTransition,
        VScrollYTransition,
        VScrollYReverseTransition,
        VSlideXTransition,
        VSlideXReverseTransition,
        VSlideYTransition,
        VSlideYReverseTransition,
        VExpandTransition,
        VExpandXTransition,
    },
});

const opts = {}

export default new Vuetify(opts)