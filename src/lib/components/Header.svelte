<script lang="ts">

</script>


<header>
    <a href="/"><img src="/logo.png" alt=""></a>
    <nav>
        <ul>
            <li><a href="/about">About Me</a></li>
            <li><a href="/work">My Work</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>




<style lang="scss">
    header{
        display: flex;
        justify-content: space-between;
        max-width: var(--container-width);
        padding: 0 30px;
        margin: 0 auto;
        @media (max-width: 565px){
            flex-direction: column;
        }
        img{
            width: auto;
            height: 150px;
            object-fit: contain;
            @media (max-width: 565px) {
                display: block;
                margin: 0 auto;
                height: 100px;
            }


        }
        nav{
            ul{
                display: flex;
                list-style: none;
                gap: 15px;
                padding-top: 25px;
                @media (max-width: 565px) {
                    gap: 30px;
                    justify-content: center;
                    
                }
            }
        }
    }
</style>