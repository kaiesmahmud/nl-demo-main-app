<script>
    import { showAdminNavItem } from "../../store/store";

    let showItemsName = [
        "Analytics",
        "All-Category",
        "All-Products",
        "All-Users",
        "All-Orders",
    ]
    
</script>

<section class="w-full md:w-2/3 bg-black/20 rounded shadow-lg">
    Admin Body {$showAdminNavItem}
</section>