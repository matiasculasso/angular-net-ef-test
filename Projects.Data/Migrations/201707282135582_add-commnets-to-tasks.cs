namespace Project.Entities.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addcommnetstotasks : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TaskComments", "Task_Id", c => c.Int());
            CreateIndex("dbo.TaskComments", "Task_Id");
            AddForeignKey("dbo.TaskComments", "Task_Id", "dbo.Tasks", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TaskComments", "Task_Id", "dbo.Tasks");
            DropIndex("dbo.TaskComments", new[] { "Task_Id" });
            DropColumn("dbo.TaskComments", "Task_Id");
        }
    }
}
